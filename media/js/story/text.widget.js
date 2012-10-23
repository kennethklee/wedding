Kore.widget.register("text", function (options) {
	var k = Kore,
		opt = options || {},
		text = opt.text || "Text",
		style = opt.style || {},
		widget = k.createTag("div");
	
	$(widget).html(text);
	$.extend(widget.style, style);
	
	widget.fn_scale = function(ratioX, ratioY) {
		//$(this).css("-webkit-transform", "scale(" + ratioX + ", " + ratioY + ")");
		var ratio = Math.min(ratioX, ratioY);
		var fontSize = parseInt(this.style.fontSize, 10);
		this.style.fontSize = (ratio * fontSize) + "px";
	};
	
	return widget;
});