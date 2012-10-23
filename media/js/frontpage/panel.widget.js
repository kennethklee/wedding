Kore.widget.register("kv.panel", function (options) {
	var widget = Kore.createTag("div"),
		opt = options || {},
		style = opt.style || {},
		content = opt.content || Kore.createTag("div"),
		title = opt.title || "ASDFFFFFFF";

	widget.dom = {
		background: Kore.createTag("div"),
		content: content,
		title: Kore.createTag("div")
	}
	widget.appendChild(widget.dom.background);
	widget.appendChild(widget.dom.title);
	widget.appendChild(widget.dom.content);

	$(widget.dom.background).css({
		position: "absolute",
		top: "60px",
		bottom: "92px",
		left: "60px",
		right: "60px",
		'border-radius': "15px",
		'-moz-border-radius': "15px",
		opacity: 0.8,
		filter:"alpha(opacity=80)",
		'background-color': "white"
	});
	$(widget.dom.title).css({
		position: "absolute",
		top: "60px",
		width: "100%"
		
	});
	$(widget.dom.title).html(title);
	$(widget.dom.content).css({
		position: "absolute",
		top: "100px",
		bottom: "112px",
		left: "80px",
		right: "80px"
	});
	$(widget).css(style);

	return widget;
});