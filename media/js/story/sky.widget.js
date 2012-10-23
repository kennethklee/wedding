Kore.widget.register("sky", function (options) {
	var k = Kore,
		opt = options || {},
		widget = k.createTag("div");
	
	widget.svg = [widget, 924, 922, 
		{
			"r": 461,
			"cx": 463,
			"cy": 463,
			"type": "circle",
			"fill": "r#73d5f0-#2388c1",
			"stroke": "none"
		}];

	widget.style.width = widget.svg[1] + "px";
	widget.style.height = widget.svg[2] + "px";

	
	widget.raphael = new Raphael(widget.svg);

	//$("circle", widget).attr("style", "filter:url(#dropshadowleft2)");

	return widget;
});