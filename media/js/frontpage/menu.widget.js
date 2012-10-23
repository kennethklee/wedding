Kore.widget.register("kv.menu", ["kv.bells", "kore.menuItem", "kore.menu"], function (options) {
	var k = Kore,
		opt = options || {},
		fade = opt.fade || 2,
		style = opt.style || {},
		labelStyle = opt.labelStyle || {},
		titleStyle = opt.titleStyle || {},
		menuItems = opt.items || [{text: "Home", style: {color: "red"}, event: {click: "kv.menu.Home.click"}}],
		widget = k.createTag("div");

	widget.currentIndex = 0;
	widget.select = function (index) {
		if (Object.prototype.hasOwnProperty.call(this.dom.menu.childNodes, index)) {
			this.currentIndex = index;
			// var item = this.dom.menu.childNodes[index],
				// top = Kore.getPageY(item) - widget.dom.backgroundBottom.offsetTop,
				// bottom = top + item.offsetHeight,
				// topStart = ((top - widget.fade) / widget.dom.backgroundBottom.offsetHeight),
				// topEnd = (top / widget.dom.backgroundBottom.offsetHeight),
				// botStart = (bottom / widget.dom.backgroundBottom.offsetHeight),
				// botEnd = ((bottom + widget.fade) / widget.dom.backgroundBottom.offsetHeight);

			// $(this.dom.backgroundBottom).css({
				// "background-image": "-webkit-gradient(linear, left top, left bottom, color-stop(0,#FFFFFF), color-stop(" + (topStart) + ",#FFFFFF), color-stop(" + (topEnd) + ",rgba(255,255,255,0)), color-stop(" + (botStart) + ",rgba(255,255,255,0)), color-stop(" + (botEnd) + ",#FFFFFF), color-stop(1,#FFFFFF))"
			// });
		}
	};

	widget.fade = fade;
	widget.dom = {
		// "backgroundTop": k.createTag("div"),
		//"backgroundBottom": k.createTag("div"),
		"bells": k.widget.create("kv.bells"),
		// "label": k.createTag("div"),
		"title": k.createTag("div"),
		"menu": k.widget.create("kore.menu", {items: menuItems}),
		"footer": k.createTag("div")
	};

	// Widget DOM
	$(widget).css({
		height: "100%",
		width: "100%",
		align: "center"
	});

	// Background DOM
	// $(widget.dom.backgroundTop).css({
		// "z-index": -1,
		// "position": "fixed",
		// "background": "grey",
		// "opacity": 0.7,
		// "width": "100%",
		// "height": "60%",
		// "top": "0%",
		// "left": "0",
		// "bottom": "0",
		// "right": "0",
		// "background-image": "-webkit-radial-gradient(center 70%, circle contain, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 64px, rgb(255, 255, 255) 66px)"
	// });

	// $(widget.dom.backgroundBottom).css({
		// "z-index": -1,
		// "position": "fixed",
		// "background": "grey",
		// "opacity": 0.7,
		// "width": "100%",
		// "height": "40%",
		// "top": "60%",
		// "left": "0",
		// "bottom": "0",
		// "right": "0"
	// });

	// Bells DOM
	$(widget.dom.bells).css({
		"position": "relative",
		"width": "100%",
		"top": "40%"
	});

	// Label DOM
	// $(widget.dom.label).html("Wedding");
	// $(widget.dom.label).css({
		// position: "absolute",
		// display: "block",
		// width: "100%",
		// top: "40%",
		// "font-size": "24px"
	// });
	// $(widget.dom.label).css(labelStyle);

	// Title DOM
	$(widget.dom.title).html("Kenneth & Vivian");
	$(widget.dom.title).css({
		position: "absolute",
		display: "block",
		width: "100%",
		top: "45%",
		"font-size": "72px",
		'font-family': "'Tangerine', cursive"
	});
	$(widget.dom.title).css(titleStyle);

	// Menu DOM
	$(widget.dom.menu).css(style);

	// Footer DOM
	$(widget.dom.footer).css({
		opacity: 0.8,
		filter: "alpha(opacity=80)",
		position: "absolute",
		bottom: 0,
		height: "32px",
		width: "100%",
		'text-align': "left",
		'background-color': "white"
	});
	$(widget.dom.footer).html("<span class='footerText'>Photography by <a href='http://www.kevinlamphoto.com/'><img style='width:256px; height: 32px; vertical-align:bottom;' src='/media/img/photographerLogo.png'/></span>");
	// $(widget.dom.footer).html("<span class='footerText'><a href='http://konquest.com' target='_blank'>I</a> made this &lt;3</a>, Photography by <a href=''>Kevin Lam</span>");

	// Put all together
	// widget.appendChild(widget.dom.backgroundTop);
	// widget.appendChild(widget.dom.backgroundBottom);
	widget.appendChild(widget.dom.bells);
	// widget.appendChild(widget.dom.label);
	widget.appendChild(widget.dom.title);
	widget.appendChild(widget.dom.menu);
	widget.appendChild(widget.dom.footer);

	$(window).resize(function () {
		widget.select(widget.currentIndex);
	});

	return widget;
});