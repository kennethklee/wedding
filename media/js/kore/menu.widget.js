Kore.widget.register("kore.menu", ["kore.menuItem"], function (options) {
	var k = Kore,
		opt = options || {},
		style = options.style || {},
		items = options.items || [{text: "Menu #1"}, {text: "Menu #2"}],
		widget = k.createTag("div");

	$(widget).css(style);
	widget.menuItems = [];
	var i;
	for (i = 0; i < items.length; ++i) {
		var item = k.widget.create("kore.menuItem", items[i]);
		item.parent = widget;
		widget.appendChild(item);
		widget.menuItems.push(item);
	}

	return widget;
});
