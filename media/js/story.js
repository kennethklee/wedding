var Story = {};
(function () {
	function S() {
		// Constructor
	}
	S.version = "0.0.1";
	
	S.js_assets = [
		"/media/js/story/text.widget.js",
		"/media/js/story/sun.widget.js",
		"/media/js/story/cloud.widget.js",
		"/media/js/story/leathercover.widget.js",
		"/media/js/story/sky.widget.js",
		"/media/js/story/page.widget.js",
		"/media/js/story/fence.widget.js",
		"/media/js/story/house.widget.js",
		"/media/js/story/boybear.widget.js",
		"/media/js/story/girlbear.widget.js",
		"/media/js/story/tree.widget.js"
	];
	S.entity = {};
	S.start = function (containerId) {
		Story.container = $(containerId ? containerId : "#container");
		// Catch when the last widget is registered
		var listenerId = Kore.eventBus.listen("kore.widget.register", function(source, args) {
			if (args === "tree") {
				Kore.eventBus.unlisten("kore.widget.register", listenerId);
				Story.initialize();
			}
		});
		Kore.widget.fetch(Story.js_assets);
	};
	S.initialize = function () {
		Story.entity = {
			cover: Kore.widget.create("leather cover"),
			sky: Kore.widget.create("sky"),
			page: Kore.widget.create("page"),
			sun: Kore.widget.create("sun"),
			cloud1: Kore.widget.create("cloud 1"),
			cloud2: Kore.widget.create("cloud 1"),
			cloud3: Kore.widget.create("cloud 1"),
			tree1: Kore.widget.create("tree"),
			tree2: Kore.widget.create("tree"),
			fence1: Kore.widget.create("fence"),
			fence2: Kore.widget.create("fence"),
			fence3: Kore.widget.create("fence"),
			house: Kore.widget.create("house"),
			boy: Kore.widget.create("boybear"),
			girl: Kore.widget.create("girlbear"),
			kennethText: Kore.widget.create("text", {text: "kenneth", style: {"font-family": "Cloooud", "font-size": "133px", color: "#68deff"}}),
			andText: Kore.widget.create("text", {text: "&", style: {"font-family": "Cloooud", "font-size": "133px", color: "#68deff"}}),
			vivianText: Kore.widget.create("text", {text: "vivian", style: {"font-family": "Cloooud", "font-size": "133px", color: "#68deff"}})
		};
		var ent;
		for (ent in Story.entity) {
			if (Story.entity.hasOwnProperty(ent)) {
				Story.entity[ent].style.position = "absolute";
				Story.container.append(Story.entity[ent]);
			}
		}
		
		$("desc").remove();
		
		Story.entity["cloud3"].scale(0.75, 0.7);
		
		$(window).resize(function (e) {
			var sceneWidth = 1200;
			var sceneHeight = 1000;
		
			var windowWidth = Story.container[0].offsetWidth;
			var windowHeight = Story.container[0].offsetHeight;
			
			var minWidthHeight = Math.min(windowHeight, windowWidth);
			//var minOffsetWidthHeight = Math.min(windowHeight, windowWidth);
			
			//var finalRatioW = minWidthHeight / sceneWidth;
			//var finalRatioH = minWidthHeight / sceneHeight;
			var finalRatioW = minWidthHeight / sceneHeight;
			var finalRatioH = minWidthHeight / sceneHeight;
			
			Story.entity["cover"].move(-40, 500);
			Story.entity["cover"].scaleToSize(1275, 500);

			Story.entity["sky"].move(140, 40);
			Story.entity["sky"].scaleToSize(925, 925);
			
			Story.entity["page"].move(0, 450);
			Story.entity["page"].scaleToSize(1200, 550);
			
			Story.entity["cloud1"].move(110, 225);
			Story.entity["cloud1"].scaleToSize(160, 115);
			
			Story.entity["cloud2"].move(350, 50);
			Story.entity["cloud2"].scaleToSize(175, 90);

			Story.entity["cloud3"].move(950, 315);
			Story.entity["cloud3"].scaleToSize(145, 100);

			Story.entity["house"].move(675, 530);
			Story.entity["house"].scaleToSize(135, 130);
			
			Story.entity["sun"].move(740, 165);
			Story.entity["sun"].scaleToSize(200, 200);
			
			Story.entity["fence1"].move(100, 820);
			Story.entity["fence1"].scaleToSize(215, 85);
			Story.entity["fence1"].rotate(-5);
			Story.entity["fence2"].move(380, 820);
			Story.entity["fence2"].scaleToSize(215, 85);
			Story.entity["fence2"].rotate(5);
			Story.entity["fence3"].move(660, 815);
			Story.entity["fence3"].scaleToSize(215, 85);
			Story.entity["fence3"].rotate(-5);
			
			Story.entity["boy"].move(415, 665);
			Story.entity["boy"].scaleToSize(105, 120);
			//entity["boy"].rotate(-5);

			Story.entity["girl"].move(520, 665);
			Story.entity["girl"].scaleToSize(105, 120);

			Story.entity["tree1"].move(60, 605);
			Story.entity["tree1"].move(60, 605);
			Story.entity["tree1"].scaleToSize(260, 285);
			Story.entity["tree2"].move(840, 640);
			Story.entity["tree2"].scaleToSize(260, 285);
			Story.entity["tree2"].flipH();
			
			Story.entity["tree1"].move(60, 605);
			var ent;
			for (ent in Story.entity) {
				if (Story.entity.hasOwnProperty(ent)) {
					Story.entity[ent].move(Story.entity[ent].offsetLeft * finalRatioW, Story.entity[ent].offsetTop * finalRatioH);
					Story.entity[ent].scale(finalRatioW, finalRatioH);
				}
			}
			
		});
		
		$(window).trigger("resize");
		
	};

	Story = S;
}());