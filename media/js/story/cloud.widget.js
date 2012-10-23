Kore.widget.register("cloud 1", function (options) {
	var k = Kore,
		opt = options || {},
		widget = k.createTag("div");

	widget.svg = [widget, 164, 118,
		{
			"fill": "#FFFFFF",
			"type": "path",
			"stroke": "none",
			"path": "M90,2c4,0,8,0,12,0c7.239,3.427,15.267,6.067,15,17 c6.262-0.651,12.551-3.43,19-2c9.131,2.025,15.693,12.247,10,24c5.746,2.587,12.104,4.563,15,10c0,4,0,8,0,12 c-3.076,4.59-3.984,11.349-10,13c8.526,17.15-9.109,32.342-25,25c-2.805,0.862-2.127,5.206-4,7c-1.992,3.675-5.746,5.587-9,8 c-3.333,0-6.667,0-10,0c-7.146-2.854-13.834-6.166-17-13c-4.146,5.187-8.294,10.372-15,13c-1.667,0-3.333,0-5,0 c-7.887-2.446-13.329-7.338-16-15c-13.251,5.099-33.877,3.488-32-15c-6.717-2.616-13.194-5.473-16-12c0-4,0-8,0-12 c2.436-3.897,5.281-7.386,9-10c-13.539-13.404,4.58-37.672,23-28C33.459,4.607,66.585,2.831,75,15C78.036,8.702,83.524,4.857,90,2 z"
		}];
	widget.style.width = widget.svg[1] + "px";
	widget.style.height = widget.svg[2] + "px";
		
	widget.raphael = new Raphael(widget.svg);
	//$("path", widget).attr("style", "filter:url(#dropshadow1)");
	
	return widget;
});

Kore.widget.register("cloud2", function (options) {
	var k = Kore,
		opt = options || {},
		widget = k.createTag("div");

	//widget.svg;
		
	return widget;
});