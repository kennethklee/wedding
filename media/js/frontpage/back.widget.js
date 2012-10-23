Kore.widget.register("kv.back.menu", function (options) {
	var widget = Kore.createTag("div"),
		opt = options || {},
		style = opt.style || {},
		click = opt.click || null;

	$(widget).css({
		display: "block",
		'z-index': 10001,
		height: "200px",
		width: "100%",
		'cursor': 'pointer'
	});
	$(widget).css(style);

	widget.dom = {
		text: Kore.createTag("span")
	};
	widget.raphael = new Raphael(widget, 100, 200);

	widget.raphael.circle(50, 50, 50)
		.attr({
			fill: "black",
			stroke: "none",
			opacity: 0.8
		})
		.click(function () {
			Kore.eventBus.shout(widget, click);
		});
	widget.raphael.rect(48, 98, 4, 200)
		.attr({
			fill: "black",
			stroke: "none"
		});

	$(widget.dom.text).html("Back");
	$("svg", widget).css({
		'position': 'absolute'
	});
	$(widget.dom.text).css({
		position: "absolute",
		color: "white",
		opacity: 0.8,
		'z-index': 10001,
		'font-weight': 700,
		'font-size': "20px",
		'line-height': "100px",
		'width': "100px"
	});
	$(widget).append(widget.dom.text);
	$(widget.dom.text).click(function () {
		Kore.eventBus.shout(widget, click);
	});

	return widget;
});