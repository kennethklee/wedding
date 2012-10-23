Kore.widget.register("kore.menuItem", null, function (options) {
	var k = Kore,
		opt = options || {},
		style = options.style || {display: "block"},
		text = options.text || "Menu Item",
		widget = k.createTag("span");

	var attachEvents = function (dom, options) {
		var events = options.event || {},
			source = dom;
		var event;
		for (event in events) {
			if (events.hasOwnProperty(event)) {
				//console.log(event + " -> " + events[event]);
				$(dom).bind(event, events[event], function (eventObject) {
					//console.log(eventObject.data);
					Kore.eventBus.shout(source, eventObject.data);
				});
			}
		}
		//console.log(event);
	};

	$(widget).css(style);
	attachEvents(widget, opt);

	$(widget).html(text);

	return widget;
});