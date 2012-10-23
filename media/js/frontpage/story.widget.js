Kore.widget.register("kv.story", ["kv.panel"], function (options) {
	var opt = options || {},
		style = opt.style || {},
		content = Kore.createTag("div"),
		widget = Kore.widget.create("kv.panel", {style: style, content: content, title: "Story"});

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

	// What to put in content
	$(content).css({
		overflow: "auto",
		'margin-bottom': "40px",
		'text-align': "left",
		'font-size': '14px'
	});
	// var story = "[Pic of Vivian] Vivian, a beautiful young woman with dark brown hair, enjoys a good romance or drama story. She is great at organizing and planning. Vivian loves quiet breaks and trying out delicious meals. She also hates waking up to loud sounds or when things don't go according to plan. You can often find Vivian sitting up in bed reading Twilight or at Guu eating Takoyaki. In the future, you might find her in Paris dining at the best restuarants.<br /><br />";
		// story += "Kenneth, a dashing young man, enjoys catching up with old friends. He is great at creating web applications and dislocating his jaw with epic yawns. Kenneth loves hot showers and sweet desserts. He hates cars that don't signal and cars that run him over. You can often find Kenneth sitting in front of his computer or giving Vivian a great big hug. In the future, you might find him in Mountain View, California working for Google. *fingers crossed* [Pic of Kenneth]<br /><br />";
		// story += "Vivian and Kenneth met during their first class together in Mary Ward High School. Little did they know then how intertwined their entire lives would become. When they are together, sparks fly; they would share umbrellas in the rain, or huddled under shelter with arms around each other. In high school, they remained close friends.<br /><br />";
		// story += "After high school graduation, Vivian and Kenneth would go their seperate ways into different universities. Vivian headed to Laurier while Kenneth, to Waterloo. Even though apart, they managed to stay in touch through frequent activities with friends when in Toronto. Then on Oct 6th, Vivian and Kenneth went out for a casual dinner at Canyon Creek. In the romantic atmosphere, their eyes met, and for the first time, they kissed. Vivian and Kenneth learned that day, they are soulmates.<br /><br />"
		// story += "Vivian and Kenneth became inseperable. Together, they went through many adventures. They would get lost in London and Paris but find a way back. They've botched up making macronni and cheese and still look back laughing at their failure. They spent a day arguing about finances and made up, while gaining a greater understanding of each other that will help them last forever. Vivian and Kenneth look forward to many more adventures to come.<br /><br />"
		// story += "Thank you for spending the time reading our story. I hope you enjoyed it as much as we've enjoyed being with each other.<br /><br />"
	
	var story = "We first met each other in science class while attending the same high school. Throughout our high school years, we developed a connection and became close friends. Some of our memories during that time include going to a semi-formal dance together and huddling under an umbrella to escape the rain at Canada's Wonderland.<br /><br />";
	story += "After high school graduation, we ended up going our separate ways, both going to different universities. Vivian headed to Laurier while Kenneth, to Waterloo. Even though we were apart, we managed to stay in touch through frequent activities with friends in Toronto. Seven years later, we went out for a casual dinner at Canyon Creek. That dinner sparked a romantic connection and we began dating.<br /><br />";
	story += "Since then, we've been inseparable. We've fallen in love and managed to have tons of fun along the way. We enjoy travelling, cooking and playing tennis together and look forward to many more adventures ahead.<br /><br />";
	story += "After dating for five years, Kenneth proposed to Vivian. He took her out for dinner for her birthday and gave her a lock that was engraved with both their names as a gift. On a trip to Paris, we saw a bridge where lovers attached locks with their names and thought this was romantic. So after dinner, we went for a walk and ended up at the Humber Bay Bridge where Kenneth got down on one knee and proposed. Of course, Vivian said yes. We attached the lock to the bridge and threw the key into the river.<br /><br />";
	story += "We are so excited to celebrate our wedding day with family and friends and to start our lives together as husband and wife.<br /><br />";
	$(content).html(story);
	
	return widget;
});