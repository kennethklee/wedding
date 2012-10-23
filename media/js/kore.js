Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) { size++; }
    }
    return size;
};

var Kore = {};
(function () {
	function K() {
		// Constructor
	}
	K.version = "0.0.2";

	// ======================================================
	// Event Bus
	// ======================================================
	K.eventBus = {
		channels: {},
		listen: function (event, callback) {	// Listen 
			if (!this.channels[event]) {
				this.channels[event] = {sequence: 0, listeners: {}};
			}
			var channel = this.channels[event],
				id = channel.sequence;
			channel.listeners[id] = callback;
			channel.sequence += 1;
			return id;
		},
		unlisten: function (event, listener_id) {
			this.channels[event].listeners[listener_id] = null;
			delete this.channels[event].listeners[listener_id];
		},
		shout: function (source, event, args) {
			if (!event) { return; }
			if (!this.channels[event]) {
				return;
			}
			var id,
				listeners = this.channels[event].listeners;
			for (id in listeners) {
				if (listeners.hasOwnProperty(id)) {
					listeners[id](source, args);
				}
			}
		}
	};

	// ======================================================
	// Cache
	// ======================================================
	K.cache = {
		expiry: 60 * 5,	// 5 minutes
		list: {},
		now: function () {
			return Math.round((new Date()).getTime() / 1000);
		},
		put: function (key, data, expiry) {
			var expires = expiry || this.now() + this.expiry;
			this.list[key] = {payload: data, expires: expires};
		},
		get: function (key) {
			if (this.list.hasOwnProperty(key)) {
				if ((this.now() - this.list[key].expires) <= 0) {
					return this.list[key].payload;
				}
			}
			return null;
		},
		remove: function (key) {
			var result;
			if (this.list.hasOwnProperty(key)) {
				result = this.list[key];
				delete this.list[key];
			}
			return result;
		},
		exists: function (key) {
			if (typeof key !== "string") {
				var result = true,
					item;
				for (item in key) {
					if (key.hasOwnProperty(item)) {
						result = result && this.exists(key[item]);
					}
				}
				return result;
			} else {
				return this.list.hasOwnProperty(key);
			}
		},
		isExpired: function (key) {
			if (this.list.hasOwnProperty(key)) {
				if ((this.now() - this.list[key].expires) <= 0) {
					return false;
				}
			}
			return true;
		}
	};

	// ======================================================
	// AJAX Data Stream
	// ======================================================
	K.dataStream = {
		what_url_map: {
		},
		queue: {},
		bind: function (what, url) {
			var old = null;
			if (this.what_url_map.hasOwnProperty(what)) {
				old = this.what_url_map[what];
			}
			this.what_url_map[what] = url;
			return old;
		},
		unbind: function (what) {
			var result;
			if (this.what_url_map.hasOwnProperty(what)) {
				result = this.what_url_map[what];
				delete this.what_url_map[what];

				Kore.cache.remove(result);
			}
			return result;
		},
		request: function (source, what, options, callback) {
			var opt = options || {},
				url = this.what_url_map.hasOwnProperty(what) ? this.what_url_map[what] : null,
				ignoreCache = opt.ignoreCache || false;

			if (!url) {
				throw "Data Stream Request failed: No url mapped for name '" + what + "'";
			}
			// Cache
			if (!ignoreCache) {
				var cached = Kore.cache.get(url);
				if (cached && callback) {
					callback(source, true, cached);
					return;
				}
			}

			// Queue
			if (Object.size(this.queue) === 0) {
				Kore.eventBus.shout(source, "kore.dataStream.queue.started", null);
			}

			if (this.queue.hasOwnProperty(url)) {
				this.queue[url].push({source: source, callback: callback});
				return;
			} else {
				this.queue[url] = [{source: source, callback: callback}];
			}

			// Get resource
			$.ajax({
				type: 'GET',
				url: url,
				success: function (resp) {
					if (!resp) { return; }
					var queue = Kore.dataStream.queue;
					if (queue.hasOwnProperty(url)) {
						Kore.cache.put(url, resp);
						var i;
						for (i = 0; i < queue[url].length; ++i) {
							if (queue[url][i].callback) {
								queue[url][i].callback(queue[url][i].source, true, resp);
							}
						}
					}
					Kore.eventBus.shout(source, "kore.dataStream.recieved", {what: what, data: resp});	// Notify that a resource was recieved
				},
				error: function (jqXHR, textStatus, errorThrown) {
					var queue = Kore.dataStream.queue;
					var i;
					for (i = 0; i < queue[url].length; ++i) {
						if (queue[url][i].callback) {
							queue[url][i].callback(queue[url][i].source, false, {code: jqXHR.status, message: textStatus});
						}
					}
					Kore.eventBus.shout(source, "kore.dataStream.error", {code: jqXHR.status, message: textStatus});	// Notify that a resource was recieved
				},
				complete: function (jqXHR, textStatus) {
					var queue = Kore.dataStream.queue;
					delete queue[url];
					if (Object.size(queue) === 0) {
						Kore.eventBus.shout(source, "kore.dataStream.queue.empty", null);
					}
				}
			});
		}
	};

	// ======================================================
	// Widget
	// ======================================================
	K.widget = {
		list: {},
		queue: {},
		fetch: function (url, callback, options) {
			var opt = options || {},
				cb = callback,
				ignoreCache = opt.ignoreCache || false;

			// Cache
			if (!ignoreCache) {
				var cached = Kore.cache.get(url);
				if (cached && callback) {
					callback(url);
					return;
				}
			}

			var fetchCallback = function (url, callback) {	// Callback function to handle queue
				Kore.cache.put(url, "Loaded JS");
				var queue = Kore.widget.queue;
				delete queue[url];

				if (Object.size(queue) === 0) {
					Kore.eventBus.shout(null, "kore.widget.queue.empty", null);
				}

				if (callback) {
					callback(url);
				}
			};

			if (typeof url === "string") {
				//console.log("Appending script " + url);
				if (Object.size(this.queue) === 0) {
					Kore.eventBus.shout(null, "kore.widget.queue.started", null);
				}

				if (this.queue.hasOwnProperty(url)) {
					this.queue[url].push({source: null, callback: callback});
					return;
				} else {
					this.queue[url] = [{source: null, callback: callback}];
				}

				var scriptTag = document.createElement('script');
				//scriptTag.type = 'text/javascript';
				//scriptTag.async = true;
				scriptTag.src = url + (navigator.appName === 'Microsoft Internet Explorer' ? "?" + new Date().getTime() : "");
				scriptTag.onreadystatechange = function () {
					if (this.readyState === 'complete' || this.readyState === 'loaded') {
						this.onreadystatechange = null;

						// This is stupid, but it's the only way
						setTimeout(function () {
							fetchCallback(scriptTag.src, cb);
						}, 100);
					}
				};
				scriptTag.onload = function () {
					fetchCallback(scriptTag.src, cb);
				};

				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(scriptTag, s);
			} else {
				//console.log("Processing script array...");
				// Assume an array
				var i;
				for (i in url) {
					if (url.hasOwnProperty(i)) {
						this.fetch(url[i], cb);
					}
				}
			}
		},
		// Warning: Simple dependency check. Avoid dependency loops!
		register: function (name, dependencies, createWidgetFn) {
			if (arguments.length === 2) {
				createWidgetFn = dependencies;
				dependencies = null;
			}
			var result = (this.list.hasOwnProperty(name)) ? this.list[name].create : null;
			this.list[name] = {dependencies: dependencies, create: createWidgetFn};
			Kore.eventBus.shout(this, "kore.widget.register", name);
			return result;
		},
		create: function (name, options) {
			var i, errors = [];
			if (!this.list.hasOwnProperty(name)) {
				throw name + " does not exist";
			}

			var widget = this.list[name];
			// Check dependencies
			if (widget.dependencies) {
				for (i = 0; i < widget.dependencies.length; ++i) {
					if (!Kore.widget.exists(widget.dependencies[i])) {
						errors.push(widget.dependencies[i]);
					}
				}
				if (errors.length > 0) {
					throw "Widget dependency check failed: " + errors.join();
				}
			}

			var result = widget.create(options);
			if (options && options.hasOwnProperty("id")) {
				result.id = options.id;
			}
			if (options && options.hasOwnProperty("clss")) {
				result.className = options["class"];
			}
			// extend functionality
			result.typeOf = name;
			result.scale = function (ratioX, ratioY) {
				if (this.raphael) {
					var svg = $("svg", this)[0];
					this.raphael.scale(ratioX, ratioY, 0, 0);	// ASSUMPTION
					svg.style.width = ((svg.offsetWidth + 3) * ratioX) + "px";	// HACK for SVG's increased margins
					svg.style.height = ((svg.offsetHeight + 3) * ratioY) + "px";	// HACK for SVG's increased margins
					this.style.width = (this.offsetWidth * ratioX) + "px";
					this.style.height = (this.offsetHeight * ratioY) + "px";
				} else {
					this.fn_scale(ratioX, ratioY);	// Pass on to the widget
				}
			};
			result.scaleToSize = function (width, height) {
				var widthRatio = width / this.offsetWidth;
				var heightRatio = height / this.offsetHeight;
				this.scale(widthRatio, heightRatio);
			};
			result.move = function (left, top) {
				$(this).css("left", left);
				$(this).css("top", top);
			};
			result.rotate = function (deg) {
				$(this).css("-webkit-transform", "rotate(" + deg + "deg)");
			};
			result.flipH = function () {
				$(this).css("-webkit-transform", "scale(-1, 1)");
			};
			return result;
		},
		exists: function (name) {
			if (typeof name !== "string") {
				var result = true,
					item;
				for (item in name) {
					if (name.hasOwnProperty(item)) {
						result = result && this.exists(name[item]);
					}
				}
				return result;
			} else {
				return this.list.hasOwnProperty(name);
			}
		}
	};
	K.preloadImage = function (image) {
		if (typeof image !== "string") {
			var item;
			for (item in image) {
				if (image.hasOwnProperty(item)) {
					this.preloadImage(image[item]);
				}
			}
		} else {
			var img = new Image();
			img.src = image;
		}
	};

	K.createTag = function (tag, identifier) {
		var newTag = document.createElement(tag),
			id = identifier || null;
		if (id) { newTag.setAttribute('id', id); }
		return newTag;
	};
	K.getPageY = function (dom) {
		return dom.offsetTop + (dom.offsetParent ? this.getPageY(dom.offsetParent) : 0);
	};
	K.getPageX = function (dom) {
		return dom.offsetLeft + (dom.offsetParent ? this.getPageX(dom.offsetParent) : 0);
	};

	Kore = K;

}());