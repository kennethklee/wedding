Kore.widget.register("kore.background", null, function (options) {
	var k = Kore,
		opt = options || {},
		widget = k.createTag("div"),
		style = opt.style || {};

	$(widget).css(style);
	widget.transitions = {
		fade: {
			next: function (callback) {
				$(widget.dom.curImg).css({'left': 0, 'z-index': -20, 'display': "block"});
				$(widget.dom.nextImg).css({'left': 0, 'z-index': -10, 'display': "none"});
				$(widget.dom.nextImg).fadeIn(1000, callback);
				//$(widget.dom.curImg).fadeOut(500);
			},
			prev: function (callback) {
				$(widget.dom.curImg).css({'left': 0, 'z-index': -20, 'display': "block"});
				$(widget.dom.nextImg).css({'left': 0, 'z-index': -10, 'display': "none"});
				$(widget.dom.nextImg).fadeIn(1000, callback);
				//$(widget.dom.curImg).fadeOut(500, callback);
			},
		},
		slide: {
			next: function (callback) {
				$(widget.dom.curImg).css({'left': 0, 'z-index': -20, 'display': "block"});
				$(widget.dom.nextImg).css({'left': "150%", 'z-index': -10, 'display': "block"});
				//$(widget.dom.curImg).fadeOut(300);
				//$(widget.dom.nextImg).fadeIn(300);
				$(widget.dom.curImg).animate({'left': "-150%"}, 1000);
				$(widget.dom.nextImg).animate({'left': "0%"}, 1000, callback);
			},
			prev: function (callback) {
				$(widget.dom.curImg).css({'left': 0, 'z-index': -20, 'display': "block"});
				$(widget.dom.nextImg).css({'left': "-150%", 'z-index': -10, 'display': "block"});
				//$(widget.dom.curImg).fadeOut(300);
				//$(widget.dom.nextImg).fadeIn(300);
				$(widget.dom.curImg).animate({'left': "150%"}, 1000);
				$(widget.dom.nextImg).animate({'left': "0%"}, 1000, callback);
			},
		}
	}	
	widget.interval = opt.interval || 10;	// 10 seconds
	widget.images = opt.images || ["/media/img/20110906-lee-007_web.jpg", "/media/img/20110906-lee-023_web.jpg", "/media/img/20110906-lee-011_web.jpg"];
	widget.currentIndex = 0;
	widget.transition = widget.transitions.fade;
	widget.dom = {
		tempImg: null,
		curImg: k.createTag("img"),
		nextImg: k.createTag("img")
	};
	widget.timeoutId = null;
	widget.autoPlay = false;
	widget.play = function() {
		widget.autoPlay = true;
		widget.timeoutId = setTimeout(function() { widget.next(); }, widget.interval * 1000);
	};
	widget.stop = function() {
		widget.autoPlay = false;
		clearTimeout(widget.timeoutId);
	};
	widget.state = "stable";

	widget.slideTo = function(index) {
		if (index > (widget.images.length - 1) || index < 0) {
			throw "Out of bounds error";
		}
		
		if (widget.state !== "stable") {
			return;
		}
		widget.dom.nextImg.currentIndex = index;
		widget.state = "transition";
		
		var img = new Image();
		$(img).load(function () {
			widget.dom.nextImg.src = widget.images[widget.dom.nextImg.currentIndex];
			if (widget.currentIndex > widget.dom.nextImg.currentIndex) {
				widget.transition.prev(function() {widget.state = "stable"});
			} else {
				widget.transition.next(function() {widget.state = "stable"});
			}
			
			Kore.eventBus.shout(widget, "kore.background.bgChanged", widget.dom.nextImg.currentIndex);
			
			// Swap Images
			widget.currentIndex = widget.dom.nextImg.currentIndex;
			widget.dom.tempImg = widget.dom.curImg;
			widget.dom.curImg = widget.dom.nextImg;
			widget.dom.nextImg = widget.dom.tempImg;
		});
		img.src = widget.images[widget.dom.nextImg.currentIndex];	// Load next image
	}
	widget.next = function (ignoreAutoPlay) {
		widget.slideTo((widget.currentIndex + 1) % widget.images.length, true);

		// Auto transition
		if (!ignoreAutoPlay && widget.autoPlay) {
			widget.timeoutId = setTimeout(function() { widget.next(); }, widget.interval * 1000);
		}
	};
	widget.previous = function (callback) {
		widget.slideTo(((widget.currentIndex - 1) < 0) ? (widget.images.length - 1) : (widget.currentIndex - 1));
	};
	widget.transitionNext = function () {
	}
	//widget.next = function () {};

	var setImageStyle = function (el) {
		el.css({
			"position": "absolute",
			"top": "0",
			"left": "0",
			"right": "0",
			"bottom": "0",
			"margin": "auto",
			"min-height": "50%",
			"min-width": "50%",
			'background-size': "100%"
		});
	};
	//k.preloadImage(widget.images);

	$(widget).css({
		"z-index": -100,
		"position": "fixed",
		"width": "100%",
		"height": "100%",
		"top": "0%",
		"left": "0%"
	});
	setImageStyle($(widget.dom.curImg));
	setImageStyle($(widget.dom.nextImg));
	
	var el = $(widget);
	$(widget.dom.nextImg).hide();
	widget.appendChild(widget.dom.curImg);
	widget.appendChild(widget.dom.nextImg);

	widget.dom.curImg.src = widget.images[0];

	return widget;
});