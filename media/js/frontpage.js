
var sound = {
	rollOver: new buzz.sound("/media/snd/menu-rollover.mp3"),
	select: new buzz.sound("/media/snd/select.mp3")
};

var screenRef = {
	//'background': null,
	//'music': null,
	//'menu': null,
	//'wedding': null,
	//'backButton': null
};

function cueBackground() {
	var bgDependancies = ["/media/js/kore/background.widget.js", "/media/js/frontpage/gallerycontrols.widget.js"];

	Kore.widget.fetch(bgDependancies, function (url) {
		if (!Kore.widget.exists(["kore.background", "kv.gallerycontrols"])) {
			return;
		}
		var imgList = [
			"/media/img/20110906-LEE-001_web.JPG",
			"/media/img/20110906-LEE-002_web.JPG",
			"/media/img/20110906-LEE-003_web.JPG",
			"/media/img/20110906-LEE-004_web.JPG",
			"/media/img/20110906-LEE-005_web.JPG",
			"/media/img/20110906-LEE-006_web.JPG",
			"/media/img/20110906-LEE-007_web.JPG",
			"/media/img/20110906-LEE-008_web.JPG",
			"/media/img/20110906-LEE-009_web.JPG",
			"/media/img/20110906-LEE-010_web.JPG",
			"/media/img/20110906-LEE-011_web.JPG",
			"/media/img/20110906-LEE-012_web.JPG",
			"/media/img/20110906-LEE-013_web.JPG",
			"/media/img/20110906-LEE-014_web.JPG",
			"/media/img/20110906-LEE-015_web.JPG",
			"/media/img/20110906-LEE-016_web.JPG",
			"/media/img/20110906-LEE-017_web.JPG",
			"/media/img/20110906-LEE-018_web.JPG",
			"/media/img/20110906-LEE-019_web.JPG",
			"/media/img/20110906-LEE-020_web.JPG",
			"/media/img/20110906-LEE-021_web.JPG",
			"/media/img/20110906-LEE-022_web.JPG",
			"/media/img/20110906-LEE-023_web.JPG",
			"/media/img/20110906-LEE-024_web.JPG",
			"/media/img/20110906-LEE-025_web.JPG",
			"/media/img/20110906-LEE-026_web.JPG",
			"/media/img/20110906-LEE-027_web.JPG",
			"/media/img/20110906-LEE-028_web.JPG",
			"/media/img/20110906-LEE-029_web.JPG",
			// "/media/img/20110906-LEE-030_web.JPG",
			"/media/img/20110906-LEE-031_web.JPG",
			"/media/img/20110906-LEE-032_web.JPG",
			"/media/img/20110906-LEE-033_web.JPG",
			"/media/img/20110906-LEE-034_web.JPG",
			"/media/img/20110906-LEE-035_web.JPG",
			"/media/img/20110906-LEE-036_web.JPG",
			"/media/img/20110906-LEE-037_web.JPG",
			"/media/img/20110906-LEE-038_web.JPG",
			"/media/img/20110906-LEE-039_web.JPG",
			"/media/img/20110906-LEE-040_web.JPG",
			"/media/img/20110906-LEE-041_web.JPG",
			"/media/img/20110906-LEE-042_web.JPG",
			"/media/img/20110906-LEE-043_web.JPG",
			"/media/img/20110906-LEE-044_web.JPG",
			"/media/img/20110906-LEE-045_web.JPG",
			"/media/img/20110906-LEE-046_web.JPG",
			"/media/img/20110906-LEE-047_web.JPG",
			"/media/img/20110906-LEE-048_web.JPG",
			"/media/img/20110906-LEE-049_web.JPG",
			"/media/img/20110906-LEE-050_web.JPG"
		];

		screenRef.background = Kore.widget.create("kore.background", {interval: 8, images: imgList, style: {opacity: 0.25, filter: "alpha(opacity=25)"}});
		screenRef.galleryControls = Kore.widget.create("kv.gallerycontrols", {dots: imgList.length});
		$("#container").append(screenRef.background);
		$("#container").append(screenRef.galleryControls);
		
		screenRef.background.play();
	});
}

function cueMenu() {
	var menuDependancies = ["/media/js/frontpage/bells.widget.js", "/media/js/kore/menuitem.widget.js", "/media/js/kore/menu.widget.js", "/media/js/frontpage/menu.widget.js"];
	Kore.widget.fetch(menuDependancies, function (url) {
		if (!Kore.widget.exists(["kv.menu", "kore.menu", "kore.menuItem"])) {
			return;
		}

		var selectedItemStyle = {
			'display': 'block',
			'-webkit-text-fill-color': "transparent",
			'-webkit-background-clip': "text",
			'background-image': "-webkit-gradient(linear, 0% 100%%, 100%% 100%, from(#121b19), to(#121b19), color-stop(50%,#414a4a))",
			'background-repeat': "no-repeat",
			'color': "#555",
			'font-size': "28px",
			// 'font-weight': 700,
			'font-family': "'Judson', serif",
			'text-shadow': "#888 0px 1px 3px",
			'cursor': "pointer",
			'z-index': 500
		};
		var itemStyle = {
			'display': 'block',
			'-webkit-text-fill-color': "transparent",
			'-webkit-background-clip': "text",
			'background-image': "-webkit-gradient(linear, 0% 100%%, 100%% 100%, from(#121b19), to(#121b19), color-stop(50%,#414a4a))",
			'background-repeat': "no-repeat",
			'color': "#666",
			'font-size': "28px",
			// 'font-weight': 700,
			'font-family': "'Judson', serif",
			'text-shadow': "#fff 0px 1px 3px",
			'curor': "pointer",
			'z-index': 500
		};

		var titleStyle = {
			'-webkit-text-fill-color': "transparent",
			'-webkit-background-clip': "text",
			'background-image': "-webkit-gradient(linear, 0% 100%%, 100%% 100%, from(#121b19), to(#121b19), color-stop(50%,#414a4a))",
			'background-repeat': "no-repeat",
			//'color': "#000",
			'font-weight': 700,
			'text-shadow': "#666 0px 1px 3px",
			'white-space': "nowrap",
			'z-index': 500
		};
		var labelStyle = {
			'-webkit-text-fill-color': "transparent",
			'-webkit-background-clip': "text",
			'background-image': "-webkit-gradient(linear, 0% 100%%, 100%% 100%, from(#121b19), to(#121b19), color-stop(50%,#414a4a))",
			'background-repeat': "no-repeat",
			//'color': "#000",
			'font-weight': 700,
			'text-shadow': "#000 0px 1px 3px",
			'z-index': 500
		};

		var menuItems = [
			{text: "Our Story", style: itemStyle, event: {mouseenter: "kv.menu.Story.enter", click: "kv.menu.Story.click"}},
			{text: "Wedding", style: itemStyle, event: {mouseenter: "kv.menu.Wedding.enter", click: "kv.menu.Wedding.click"}},
			{text: "Gallery", style: itemStyle, event: {mouseenter: "kv.menu.Gallery.enter", click: "kv.menu.Gallery.click"}}
		];

		var style = {
			"position": "absolute",
			"width": "100%",
			"top": "70%",
			'z-index': 500
		};
		screenRef.menu = Kore.widget.create("kv.menu", {id: "menu", items: menuItems, style: style, labelStyle: labelStyle, titleStyle: titleStyle, fade: 4});
		$("#container").append(screenRef.menu);
		screenRef.menu.select(0);

		/*
		$(widget).css({
			"position": "absolute",
			"top": "70%",
		});
		*/
		var selectItem = function (id) {
			if (screenRef.menu.currentIndex !== id) {
				var i;
				for (i = 0; i < screenRef.menu.dom.menu.menuItems.length; ++i) {
					var item = screenRef.menu.dom.menu.menuItems[i];
					if (i === id) {
						$(item).css(selectedItemStyle);
					} else {
						$(item).css(itemStyle);
					}
				}
				sound.rollOver.stop().play();
				screenRef.menu.select(id);
			}
		};

		Kore.eventBus.listen("kv.menu.Story.enter", function (source, options) {
			selectItem(0);
		});
		Kore.eventBus.listen("kv.menu.Story.click", function (source, options) {
			sound.select.stop().play();
		});

		Kore.eventBus.listen("kv.menu.Wedding.enter", function (source, options) {
			selectItem(1);
		});
		Kore.eventBus.listen("kv.menu.Wedding.click", function (source, options) {
			sound.select.stop().play();
		});

		Kore.eventBus.listen("kv.menu.Gallery.enter", function (source, options) {
			selectItem(2);
		});
		Kore.eventBus.listen("kv.menu.Gallery.click", function (source, options) {
			sound.select.stop().play();
		});

	});
}

function cueMusic() {
	Kore.widget.fetch("/media/js/frontpage/music.widget.js", function () {
		screenRef.music = Kore.widget.create("kv.music", {style: {"font-weight": 700}, music: "/media/snd/heart-of-the-sea.mp3"});
		$("#container").append(screenRef.music);

		$(screenRef.music).css({
			"z-index": 20000,
			"position": "absolute",
			"bottom": "8px",
			"right": "8px"
		});

		screenRef.music.play();
	});
}

function loadHiddenStuff() {
	Kore.widget.fetch("/media/js/frontpage/back.widget.js", function () {
		screenRef.backButton = Kore.widget.create("kv.back.menu", {style: {position: "absolute", display: "block", bottom: "-200px", 'z-index': 10000}, click: "kv.showMenu"});
		$("#container").append(screenRef.backButton);
	});

	var jsFetch = [
		"/media/js/frontpage/panel.widget.js",
		"/media/js/frontpage/wedding.widget.js",
		"/media/js/frontpage/story.widget.js"
	];
	Kore.widget.fetch(jsFetch, function () {
		if (!Kore.widget.exists(["kv.panel", "kv.wedding", "kv.story"])) {
			return;
		}
		screenRef.wedding = Kore.widget.create("kv.wedding", {id: "wedding", style: {position: "absolute", top: 0, left: "100%", width: "100%", height: "100%", display: "block"}});
		screenRef.story = Kore.widget.create("kv.story", {id: "story", style: {position: "absolute", top: 0, left: "100%", width: "100%", height: "100%", display: "block"}});
		$("#container").append(screenRef.wedding);
		$("#container").append(screenRef.story);
	});
}

function transitionOut() {
	$(screenRef.menu.dom.bells).animate({top: "-20%"});
	$(screenRef.menu.dom.label).animate({top: "-20%"});
	$(screenRef.menu.dom.title).animate({top: "-20%"});
	$(screenRef.backButton).animate({bottom: "-60px"});
	
	$(screenRef.menu.dom.menu).animate({top: "100%"});
}

function transitionIn() {
	$(screenRef.menu.dom.bells).animate({top: "40%"}, 1000, "swing");
	$(screenRef.menu.dom.label).animate({top: "40%"}, 1000, "swing");
	$(screenRef.menu.dom.title).animate({top: "45%"}, 1000, "swing");
	$(screenRef.backButton).animate({bottom: "-200px"}, 1000, "swing");
	
	$(screenRef.menu.dom.menu).animate({top: "70%"}, 1000, "swing");
}

function initializeForGoodBrowsers() {
	var state = "Story";

	//setTimeout(Story.start, 1000);
	cueBackground();
	cueMenu();
	cueMusic();
	loadHiddenStuff();

	Kore.eventBus.listen("kv.menu.Story.click", function (source, options) {
		sound.select.stop().play();
		transitionOut();
		
		$(screenRef.story).animate({left: "0%"}, 1000);
	});
	
	Kore.eventBus.listen("kv.menu.Wedding.click", function (source, options) {
		sound.select.stop().play();
		transitionOut();
		
		$(screenRef.wedding).animate({left: "0%"}, 1000);
	});
	
	Kore.eventBus.listen("kv.menu.Gallery.click", function (source, options) {
		sound.select.stop().play();
		screenRef.background.stop();
		screenRef.background.transition = screenRef.background.transitions.slide;
		transitionOut();
		
		screenRef.galleryControls.show();
		
		$(screenRef.background).css({filter: "alpha(opacity=100)"});
		$(screenRef.background).animate({opacity: 1.0});
	});
	
	Kore.eventBus.listen("kv.showMenu", function (source, options) {
		sound.select.stop().play();
		screenRef.background.play();
		screenRef.background.transition = screenRef.background.transitions.fade;
		transitionIn();
		
		screenRef.galleryControls.hide();
		
		$(screenRef.story).animate({left: "100%"}, 1000);
		$(screenRef.wedding).animate({left: "100%"}, 1000);
		$(screenRef.gallery).animate({left: "100%"}, 1000);
		
		$(screenRef.background).css({filter: "alpha(opacity=25)"});
		$(screenRef.background).animate({opacity: 0.25});
	});
	
	Kore.eventBus.listen("kv.gallerycontrols.next", function (source, options) {
		screenRef.background.next(true);	// Ignore auto play
	});
	Kore.eventBus.listen("kv.gallerycontrols.prev", function (source, options) {
		screenRef.background.previous();
	});
	Kore.eventBus.listen("kv.gallerycontrols.toc", function (source, options) {
		screenRef.background.slideTo(options);
	});
}

function initializeForBadBrowsers() {
	var title = '<h1>Kenneth & Vivian</h1>';
	var disclaimer = 'This site is viewed best in Chrome or Firefox. Actually it looks completely different. Try it now or at home.';
	var storyHeading = '<h2>Story</h1>';
	var story = "We first met each other in science class while attending the same high school. Throughout our high school years, we developed a connection and became close friends. Some of our memories during that time include going to a semi-formal dance together and huddling under an umbrella to escape the rain at Canada's Wonderland.<br /><br />";
	story += "After high school graduation, we ended up going our separate ways, both going to different universities. Vivian headed to Laurier while Kenneth, to Waterloo. Even though we were apart, we managed to stay in touch through frequent activities with friends in Toronto. Seven years later, we went out for a casual dinner at Canyon Creek. That dinner sparked a romantic connection and we began dating.<br /><br />";
	story += "Since than, we've been inseparable. We've fallen in love and managed to have tons of fun along the way. We enjoy travelling, cooking and playing tennis together and look forward to many more adventures ahead.<br /><br />";
	story += "After dating for five years, Kenneth proposed to Vivian. He took her out for dinner for her birthday and gave her a lock that was engraved with both their names as a gift. On a trip to Paris, we saw a bridge where lovers attached locks with their names and thought this was romantic. So after dinner, we went for a walk and ended up at the Humber Bay Bridge where Kenneth got down on one knee and proposed. Of course, Vivian said yes. We attached the lock to the bridge and threw the key into the river.<br /><br />";
	story += "We are so excited to celebrate our wedding day with family and friends and to start our lives together as husband and wife.<br /><br />";
	
	var weddingHeader = '<h2>Wedding Information</h2>';
	var church = "<div style='padding: 8px;'><h2>Church</h2><p>3:00 pm</p><br /><p><b>St. Thomas the Apostle Church</b></p><p>14 HIGHGATE DR, Markham, Ontario</p></div>"
	
	var reception = "<div style='padding: 8px;'><h2>Reception</h2><p>6:30 pm - 12:00 am</p><br />";
		reception += "<p><b>Diamond Banquet Hall</b></p><p>3225 Highway 7 East, Unit 1A, Markham</p><br />";
		reception += "<p>Please find our registery at:</p>";
		reception += "<ul>";
		reception += "<li><a target='_blank' href='http://giftregistry.hbc.com/grworks/prj/generic_online/jsp/common/grbookmark.jsp?retailerid=5&cc=400101041078&languageId=0'>Home Outfitters</a> - We are registered under Vivian Pan and Kenneth Lee.</li>";
		reception += "</ul>";
		reception += "</div>";
	var html = title + disclaimer + '<br /><br />' + storyHeading + story + weddingHeader + church + reception;
	$("#container").html('<div class="ieContainer">' + html + '</div>');
  $("#container").css('overflow', 'auto')

}

$(document).ready(function () {

	if (navigator.appName === 'Microsoft Internet Explorer') {
		initializeForBadBrowsers();
	} else {
		initializeForGoodBrowsers();
	}

});