Kore.widget.register("kv.bells", function (options) {
	var k = Kore,
		opt = options || {},
		widget = k.createTag("div");
	
	widget.dom = {
		"bells": k.createTag("img")
	}
	
	widget.dom.bells.src = "/media/img/Wedding_Bells.png";
	
	widget.appendChild(widget.dom.bells);
	
	return widget;
});