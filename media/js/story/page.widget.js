Kore.widget.register("page", function (options) {
	var k = Kore,
		opt = options || {},
		widget = k.createTag("div");
	
	widget.svg = [widget, 1201, 533,
		{
			"fill": "0-#5fab27-#9bd02a-#5fab27-#9bd02a-#5fab27",
			"type": "path",
			"stroke": "none",
			"path": "M130.997,13C131.997,2,426-11,600.5,31.333l0,0C671,8.333,938-10,1062,13l0,0c0,0,147.332,529.333,139,520 l0,0c-208.669-33.333-608.542-5.333-608.503,2l0,0c-1.835-8-400.501-34.667-592.497-2l0,0L130.997,13"
		},
		{
			"fill": "90-#5fab27-#9bd02a",
			"type": "path",
			"stroke": "none",
			"path": "M130.997,13C131.997,2,426-11,600.5,31.333l0,0C671,8.333,938-10,1062,13l0,0c0,0,147.332,529.333,139,520 l0,0c-208.669-33.333-608.542-5.333-608.503,2l0,0c-1.835-8-400.501-34.667-592.497-2l0,0L130.997,13"
		}];
	//out #5fab27
	//in #9bd02a
	widget.style.width = widget.svg[1] + "px";
	widget.style.height = widget.svg[2] + "px";

	
	widget.raphael = new Raphael(widget.svg);

	$($("path", widget)[0]).attr("style", "fill-opacity: 1.0");
	$($("path", widget)[1]).attr("style", "fill-opacity: 0.75");

	return widget;
});