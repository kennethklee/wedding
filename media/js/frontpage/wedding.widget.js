Kore.widget.register("kv.wedding", ["kv.panel"], function (options) {
	var opt = options || {},
		style = opt.style || {};

	var content = Kore.createTag("div"),
		widget = Kore.widget.create("kv.panel", {style: style, content: content, title: "Wedding"});

	// $(content).css({
		// 'min-height': "400px"
	// });
	// $(widget.dom.background).css({
		// 'min-height': "440px"
	// });

	// var mapImg = function (address, zoom) {
		// var z = zoom || 16;
		// return "http://maps.googleapis.com/maps/api/staticmap?center=" + address + "&zoom=" + z + "&size=200x200&sensor=false&markers=" + address;
	// }
	var createWrapper = function (tag, content, style) {
		var tag = Kore.createTag(tag);
		tag.appendChild(content);
		if (style) {
			$(tag).css(style);
		}
		return tag;
	}
	content.dom = {
		topleft: Kore.createTag("div"),
		botleft: Kore.createTag("div"),
		topright: Kore.createTag("div"),
		botright: Kore.createTag("div")
	};
	
	var showScroll = {overflow: 'auto'};
	var hideScroll = {overflow: 'hidden'};
	content.appendChild(createWrapper('span', content.dom.topleft, showScroll));
	content.appendChild(createWrapper('span', content.dom.topright, hideScroll));
	content.appendChild(createWrapper('span', content.dom.botleft, showScroll));
	content.appendChild(createWrapper('span', content.dom.botright, hideScroll));

	$(widget.dom.title).css({
		'top': "46px",
		'-webkit-text-fill-color': "transparent",
		'-webkit-background-clip': "text",
		'background-image': "-webkit-gradient(linear, 0% 100%%, 100%% 100%, from(#121b19), to(#121b19), color-stop(50%,#414a4a))",
		'background-repeat': "no-repeat",
		//'color': "#000",
		'font-size': "28px",
		'font-weight': 700,
		'text-shadow': "#ddd 0px 1px 3px",
		'white-space': "nowrap"
	});
	$("span", content).css({
		display: "inline-block",
		width: "50%",
		height: "50%",
		'vertical-align': "top",
		'text-align': "right",
	});
	$("span > div", content).css({
		margin: '8px',
		height: "100%"
	});
	$(content.dom.topleft).html("<div style='padding: 8px;'><h2>Church</h2><p>3:00 pm</p><br /><p><b>St. Thomas the Apostle Church</b></p><p>14 HIGHGATE DR, Markham, Ontario</p></div>");
	//$(content.dom.botleft).html("<div style='padding: 8px;'><h2>Reception</h2><p>6:30 pm - 12:00 am</p><br /><p><b>Diamond Banquet Hall</b></p><p>3225 Highway 7 East, Unit 1A, Markham</p><br /><p>Gift Registery will be added soon.</p></div>");
	// $(content.dom.topright).html("<img src='" + mapImg("14 HIGHGATE DR, Markham, Ontario") + "' />");
	// $(content.dom.botright).html("<img src='" + mapImg("3225 Highway 7 East, Unit 1A, Markham", 15) + "' />");

	var reception = "<div style='padding: 8px;'><h2>Reception</h2><p>6:30 pm - 12:00 am</p><br />";
		reception += "<p><b>Diamond Banquet Hall</b></p><p>3225 Highway 7 East, Unit 1A, Markham</p><br />";
		reception += "<p>Please find our registery at:</p>";
		reception += "<ul>";
		reception += "<li><a target='_blank' href='http://giftregistry.hbc.com/grworks/prj/generic_online/jsp/common/grbookmark.jsp?retailerid=5&cc=400101041078&languageId=0'>Home Outfitters</a> - We are registered under Vivian Pan and Kenneth Lee.</li>";
		reception += "</ul>";
		reception += "</div>";
	$(content.dom.botleft).html(reception);

	var churchOpt = {
		zoom: 16,
		center: new google.maps.LatLng(43.826692, -79.316979),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var diamondOpt = {
		zoom: 15,
		center: new google.maps.LatLng(43.848394, -79.350826),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(content.dom.topright, churchOpt);
	var marker = new google.maps.Marker({
        position: churchOpt.center,
        map: map,
        title: "St. Thomas the Apostle Church"
    });
	map = new google.maps.Map(content.dom.botright, diamondOpt);
	marker = new google.maps.Marker({
        position: diamondOpt.center,
        map: map,
        title: "Diamond Banquet Hall"
    });
	
	return widget;
});