Kore.widget.register("kv.music", function (options) {
	var widget = Kore.createTag("div"),
		opt = options || {},
		style = opt.style || {},
		music = opt.music || "/media/snd/heart-of-the-sea.mp3";

	$(widget).css("cursor", "pointer");
	$(widget).css(style);

	widget.state = "stop";
	widget.dom = {
		text: Kore.createTag("span")
	};
	widget.buzz = new buzz.sound(music, {preload: true, autoload: true});
	widget.buzz.bind("ended", function () {
		//console.log("music restarting");
		widget.buzz.play();
	});
	widget.playAnimation = function () {
		if (widget.state !== "play" && widget.state !== "starting") {
			return;
		}
		var i;
		var timeout = 1200;
		for (i = 0; i < widget.bars.length; ++i) {
			var rnd = 2 + (Math.random() * 13);
			widget.bars[i].animate({y: 15 - rnd, height: rnd}, timeout, "bounce");
		}
		setTimeout(widget.playAnimation, timeout);
	};
	widget.stopAnimation = function () {
		if (widget.state !== "stop" && widget.state !== "stopping") {
			return;
		}
		var i;
		var timeout = 500;
		for (i = 0; i < widget.bars.length; ++i) {
			var rnd = 2;
			widget.bars[i].animate({y: 15 - rnd, height: rnd}, timeout, "bounce");
		}
		setTimeout(widget.stopAnimation, timeout);
	};
	var paper = new Raphael(widget, 15, 15);
	var bars = paper.set();
	bars.push(
		paper.rect(0, 0, 2, 15),
		paper.rect(3, 0, 2, 15),
		paper.rect(6, 0, 2, 15),
		paper.rect(9, 0, 2, 15),
		paper.rect(12, 0, 2, 15)
	);
	bars.attr({stroke: "none", fill: "black"});

	widget.raphael = paper;
	widget.bars = bars;

	widget.play = function () {
		if (this.state === "stop") {
			this.state = (navigator.userAgent.indexOf("Firefox")) ? "play" : "starting";
			this.playAnimation();
			widget.buzz.play().fadeIn(1000, function () {
				widget.state = "play";
			});
		}
	};

	widget.stop = function () {
		if (this.state === "play") {
			this.state = (navigator.userAgent.indexOf("Firefox")) ? "stop" : "stopping";
			this.stopAnimation();
			widget.buzz.fadeOut(500, function () {
				widget.state = "stop";
			});
		}
	};
	widget.togglePlay = function () {
		if (this.state === "stop") {
			this.play();
		} else if (this.state === "play") {
			this.stop();
		}
	};

	$(widget).click(function () {
		widget.togglePlay();
	});

	$(widget).prepend("SOUND ");

	$("svg", widget).css({
		'margin-left': "4px",
		'display': 'inline-block'
	});

	//widget.appendChild(widget);

	return widget;
});