Kore.widget.register("leather cover", function (options) {
	var k = Kore,
		opt = options || {},
		widget = k.createTag("div");

	widget.svg = [widget, 1277, 520,
		{
			"fill": "#552200",
			"type": "path",
			"stroke": "none",
			"path": "M144,0L0,520,1277,520,1129,0z"
		}];
	widget.style.width = widget.svg[1] + "px";
	widget.style.height = widget.svg[2] + "px";
		
	widget.raphael = new Raphael(widget.svg);
	//$("path", widget).attr("style", "filter:url(#leather)");
	
	return widget;
});
