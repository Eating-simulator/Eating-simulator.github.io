var linkbot = {
	insultLevel : 0,
	setspeech : function(text) {
		document.querySelector(".linkbotspeech").innerHTML = text;
	},
	insult : function() {
		texts= [
			{text:"hey! how dare you!",insultValue:1},
			{text:"Grr.. i'm mad!",insultValue:2},
			{text:"I summon all my soldiers to attack you!",insultValue:2},
			{text:"Stoppit! you're annoying me!",insultValue:2},
			{text:"AHHAHHHAHHHH! I'M MAD!",insultValue:2},
			{text:"I might take all of your links away if you don't stop.",insultValue:1},
		];
		text2 = texts[Math.floor(Math.random() * 4)];
		linkbot.setspeech(text2.text);
		this.insultLevel += text2.insultValue;
	}



}
