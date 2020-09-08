var linkbot = {
	speech : document.querySelector(".linkbotspeech");
	setspeech : function(text) {
		linkbot.speech.innerHTML = text;
	},
	insult : function() {
		texts= ["hey! how dare you!", "Grr.. i'm mad!", "I summon all my soldiers to attack you!", "Stoppit! you're annoying me!", "AHHAHHHAHHHH! I'M MAD!", "I might take all of your links away if you don't stop."];
		text = texts[Math.floor(Math.random() * texts.length)];
		linkbot.setspeech(speech);

	}



}