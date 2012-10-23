Kore.widget.register("kv.gallerycontrols", function (options) {
	var widget = Kore.createTag("div"),
		opt = options || {},
		dots = opt.dots || 5;

	widget.dom = {
		prev: Kore.createTag("div"),
		next: Kore.createTag("div"),
		toc: Kore.createTag("div")
	};
	$(widget.dom.toc).css({
		'z-index': 10000,
		position: "absolute",
		display: "block",
		cursor: "pointer",
		margin: "auto",
		right: 0,
		top: "-24px",
		color: "white",
		background: "black",
		opacity: 0.6,
		'font-size': "14px"
	});
	$(widget.dom.prev).css({
		position: "absolute",
		display: "block",
		top: "50%",
		left: "-100%",
		'z-index': 10000,
		padding: "8px",
		background: "black",
		opacity: 0.6
	});

	$(widget.dom.prev).html("<span>&lt;</span>");
	$(widget.dom.next).html("<span>&gt;</span>");
	$("span", widget.dom.prev).css({
		'-webkit-text-fill-color': "transparent",
		'-webkit-background-clip': "text",
		'background-image': "-webkit-gradient(linear, 0% 100%%, 100%% 100%, from(#121b19), to(#121b19), color-stop(50%,#414a4a))",
		'background-repeat': "no-repeat",
		'color': "#666",
		'font-size': "72px",
		'font-weight': 700,
		'text-shadow': "#ddd 0px 1px 3px",
		'cursor': "pointer"
	});
	$(widget.dom.next).css({
		position: "absolute",
		display: "block",
		top: "50%",
		right: "-100%",
		'z-index': 10000,
		padding: "8px",
		background: "black",
		opacity: 0.6
	});
	$("span", widget.dom.next).css({
		'-webkit-text-fill-color': "transparent",
		'-webkit-background-clip': "text",
		'background-image': "-webkit-gradient(linear, 0% 100%%, 100%% 100%, from(#121b19), to(#121b19), color-stop(50%,#414a4a))",
		'background-repeat': "no-repeat",
		'color': "#666",
		'font-size': "72px",
		'font-weight': 700,
		'text-shadow': "#ddd 0px 1px 3px",
		'cursor': "pointer"
	});
	widget.state = "hide";
	widget.show = function () {
		widget.state = "show";
		$(widget.dom.next).animate({right: "0%"}, 500);
		$(widget.dom.prev).animate({left: "0%"}, 500);
		$(widget.dom.toc).animate({top: "0px"}, 500);
	};
	widget.hide = function () {
		widget.state = "hide";
		$(widget.dom.next).animate({right: "-100%"}, 500);
		$(widget.dom.prev).animate({left: "-100%"}, 500);
		$(widget.dom.toc).animate({top: "-24px"}, 500);
	};
	var i;
	for (i = 0; i < dots; ++i) {
		$(widget.dom.toc).append("<span>" + (i + 1) + "</span>");
	}
	$("span", widget.dom.toc).css({
		padding: "4px"
	});

	$(widget.dom.prev).click(function () { Kore.eventBus.shout(widget, "kv.gallerycontrols.prev"); });
	$(widget.dom.next).click(function () { Kore.eventBus.shout(widget, "kv.gallerycontrols.next"); });
	$("span", widget.dom.toc).click(function () { Kore.eventBus.shout(widget, "kv.gallerycontrols.toc", $(this).index()); });

	widget.appendChild(widget.dom.prev);
	widget.appendChild(widget.dom.next);
	widget.appendChild(widget.dom.toc);

	Kore.eventBus.listen("kore.background.bgChanged", function (source, options) {
		$("span", widget.dom.toc).css({
			color: "#999",
			'font-weight': "normal"
		});
		$("span:nth-child(" + (options + 1) + ")", widget.dom.toc).css({
			color: "white",
			'font-weight': "bold"
		});
	});
	Kore.eventBus.shout(widget, "kore.background.bgChanged", 0);

	$(document).keydown(function (e) {
		if (widget.state !== "show") { return; }
		if (e.keyCode === 39) {
			Kore.eventBus.shout(widget, "kv.gallerycontrols.next");
		} else if (e.keyCode === 37) {
			Kore.eventBus.shout(widget, "kv.gallerycontrols.prev");
		}
	});
	return widget;
});