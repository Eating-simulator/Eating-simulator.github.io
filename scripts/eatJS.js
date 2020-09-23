// JavaScript file (c) Copyright 2020 ckn, technodoggo. All rights reserved. 
// This file may not be reproduced. 
var functions = {
	money: money
}
var data = {
	money: money.total,
	calories: 300,
	cheese: false,
	dorito: false,
	buttontime: -1,
	worldmap: false,
	lockeddoor: -1,
	soldierbuttonpressed: -1,
	fortressDC: -1,
	chefapron: 0,
	whynot: -1,
	libraryKey: false,
	fWM: false,
	popularity: 0,
	howpopular: "Not known",
	moneypersecond: 1,
	calDec: null,
	lotterymachinemoney: 0,
	lotterymachinemoneyturnedon: false,
	white: true,
	developermode: false,
	functions: functions,
	candies: 0,
	mexmiacorrect: false,
	moneyfactorykey: false


}

function classchange(classname, changeto) {
	document.querySelector("." + classname).innerHTML = changeto;
}

function idchange(idname, changetoid) {
	doent.getElementById(idname).innerHTML = changetoid;
}

function CheckPouplarity() {
	if (data.popularity >= 0) {
		data.howpopular = "Not known"
	}
	if (data.popularity >= 1) {
		data.howpopular = "Only a few people know you"
	}
	if (data.popularity >= 2) {

	}
}

function eat(item) {
	if (item === "pizza") {
		data.calories += 300
		data.money -= 5
		output("Oh dear. you lost 5 dollars and gained 300 callories!")
	}
	if (item === "gingerbread") {
		data.money -= 5
		output("Oh dear. you lost 5 dollars! That cookie looks nice though. probably shouldn't eat it.")
	}
	if (item === "milk") {
		data.calories += 299
		data.money -= 3
		output("You drunk some milk!")
	}
}

function chefbutton() {
	document.getElementById("yay").innerHTML = "Thanks! the cheese is probably in the store. i dont know about the data.dorito...";
	data.popularity += 1
	output("You started the quest.")
}
setInterval(function () {
	checkstats()
	data.money++;
	if (data.lotterymachinemoneyturnedon == true) {
		data.lotterymachinemoney++;
	}
	document.querySelector(".factoryhowmany").innerHTML = data.lotterymachinemoney;
	if (data.calories != 0) {
		data.calDec = Math.floor(data.calories / 300 + 1);
		data.calories -= data.calDec;
	}
	if (data.calories == 60) {
		output(" Your calories are low. Better eat something! You only have one minute left!")
	}
	if (data.calories == 10) {
		output("URGENT! You need to eat something, and fast! Ten seconds!")
	}
	if (data.calories == 0) {
		output("Too bad. You starved to death.")
		localStorage.clear()
		setTimeout(function () {
			window.location.href = window.location.href;
		}, 1000);
	}
	document.querySelector(".money").innerHTML = data.money;
	document.querySelector(".calories").innerHTML = data.calories;
	if (data.dorito === true && data.cheese === true) {
		if (data.fWM == false) {
			document.querySelector('.chefresponce1').innerHTML = ' '
			document.getElementById("chefresponce2").innerHTML = " "
			document.getElementById("yay").innerHTML = "Thank you for helping me! as a reward, here is a world map. you'll probably use it more then i do."
			data.popularity += 0.7
			output("You completed the quest and earned a world map!")
			data.worldmap = true;
			data.fWM = true;
		}
	}
	document.querySelector(".money").innerHTML = data.money;
	document.querySelector(".calories").innerHTML = data.calories;
}, 1000)
setInterval(function () {
	checkstats()
}, 1)

function founddorito() {
	document.querySelector('.chefresponce1').innerHTML = 'Ah! you found my dorito! very much thanks.'
	output("You found the dorito!")
	data.dorito = true
}

function foundcheese() {
	document.getElementById("chefresponce2").innerHTML = "Ah! you found my cheese! very much thanks."
	output("You found the cheese!")
	data.cheese = true;
}
document.getElementById("merchant").innerHTML = "                .---.            <br>               |   '.|  __       <br>               | ___.--'  )      <br>             _.-'_` _%%%_/       <br>          .-'%%% a: a %%%        <br>              %%  L   %%_        <br>              _%\\'=' |  /-.__    <br>           .-' / )--' #/     '\\  <br>          /'  /  /---'(    :   \\ <br>         /   |  /( /|##|  \\     |<br>        /   ||# | / | /|   \\    \\<br>        |   ||##| I \\/ |   |   _|<br>        |   ||: | o  |#|   |  / |<br>        |   ||  / I  |:/  /   |/ <br>        |   ||  | o   /  /    /  <br>        |   \\|  | I  |. /    /   <br>         \\  /|##| o  |.|    /    <br>          \\/ \\::|/\\_ /  ---'|    <br>           \\ |\\ |    |     :\\    <br>           | |  /     \\...' |    <br>           | |# |/\\    \\    |    <br>           | | :|  |    |   |    <br>           | |  |  |    |   |   "
document.getElementById("yumpizzaascii").innerHTML = "                                    ._           <br>                                   ,(  `-.       <br>                                 ,': `.   `.     <br>                               ,` *   `-.   \\    <br>                             ,'  ` :+  = `.  `.  <br>                           ,~  (o):  .,   `.  `. <br>                         ,'  ; :   ,(__) x;`.  ; <br>                       ,'  :'  itz  ;  ; ; _,-'  <br>                     .'O ; = _' C ; ;'_,_ ;      <br>                   ,;  _;   ` : ;'_,-'   i'      <br>                 ,` `;(_)  0 ; ','       :       <br>               .';6     ; ' ,-'~                 <br>             ,' Q  ,  ;',-.'                     <br>           ,( :` ; _,-'~  ;                      <br>         ,~.`c _','                              <br>       .';^_,-' ~                                <br>     ,'_;-''                                     <br>    ,,~                                          <br>    i'                                           <br>    :  "

function librarypathway() {
	data.buttontime++;
	if (data.buttontime == 0) {
		document.getElementById("librarianhello").innerHTML = "Oh! please don't go there. all our important ancient writings are in there. please don't even dare to go in there. if you do, you will find the- oops. i said too much."
	}
	if (data.buttontime == 1) {
		document.getElementById("librarianhello").innerHTML = "What did i just say? you can't go in there!"
	}
	if (data.buttontime == 2) {
		document.getElementById("librarianhello").innerHTML = "That is the library's top priority! Pleaassseeee do not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not go in there!"
	}
	if (data.buttontime == 3) {
		document.getElementById("librarianhello").innerHTML = "Hello?! i just said the word 'not' seven hundred and seventy and you still want to go!?!?!?"
	}
	if (data.buttontime == 4) {
		document.getElementById("librarianhello").innerHTML = "Fine. just go. *groan*"
		output("The librarian gave you permission to go inside the vault")
	}
	if (data.buttontime >= 5) {
		openTab('Libraryvault')
	}
}

function output(output) {
	document.getElementById("output").innerHTML = output;
}

function changeSoldier() {
	data.soldierbuttonpressed++;
	if (data.soldierbuttonpressed == 0) {
		document.querySelector(".soldier").innerHTML = "oH! We'll let you in then."
		output("The soldier let you in!")
		document.querySelector(".soldieranswer").innerHTML = "Thanks!"
	}
	if (data.soldierbuttonpressed >= 1) {
		openTab('vault', )
		output("You went inside the vault!")
	}
}

function AskLibrarian() {
	document.getElementById("librarianhello").innerHTML = "Good question."
	output("You asked the librarian a question!")
}

function lockdoor() {
	if (data.lockeddoor == 0) {
		document.getElementById("librarianhello").innerHTML = "Ah! that door, is the only known pathway to the unknown regions of the cknairia deserts. but only one thing: I can't unlock it...."
	}
	if (data.lockeddoor == 1) {
		openTab("Desert", this, "white")
		output("You entered the desert!")
	}

}

function ifound() {
	if (data.worldmap == true) {
		data.lockeddoor = 1
		document.getElementById("librarianhello").innerHTML = "Good gravy! you found it! the world map! i knew it exist! i Opened the door that leads to the desert. turns out you needed a world map to unlock it. i was wondering. here, let me open the door. just 5 seconds...."
		document.querySelector(".lockeddoor").innerHTML = "An unlocked door"
		setTimeout(function () {
			openTab("Desert", this, "white")
			output("You entered the desert!")
		}, 5000)
	} else {
		document.getElementById("librarianhello").innerHTML = "Then, where is it? LIAR"
		output("You've been called a liar!")
	}
}

function fortresdoor(){data.fortressDC++;if(data.fortressDC==0){document.querySelector(".fortressresponce").innerHTML="No responce. why don't you try again?";output("You've been ignored!")}if(data.fortressDC==1){document.querySelector(".fortressresponce").innerHTML="....."}if(data.fortressDC==2){document.querySelector(".fortressresponce").innerHTML="You know there's no one in here, all right?";output("You've been told no one is in here!")}if(data.fortressDC==3){document.querySelector(".fortressresponce").innerHTML="You're wasting your time. stop.";output("You've been told you're wasting your time!")}if(data.fortressDC==4){document.querySelector(".fortressresponce").innerHTML="Do you even know what you're doing?";output("You've been asked whether you know what you're doing!")}if(data.fortressDC==5){document.querySelector(".fortressresponce").innerHTML="The sun's almost down."}if(data.fortressDC==6){document.querySelector(".fortressresponce").innerHTML="Uh oh, there's a hyena there."}if(data.fortressDC==7){document.querySelector(".fortressresponce").innerHTML="It's starting to get cold.";output("It's starting to get cold!")}if(data.fortressDC==8){document.querySelector(".fortressresponce").innerHTML="Do you even know what you're doing?";output("You've been told you're wasting your time!")}if(data.fortressDC==9){document.querySelector(".fortressresponce").innerHTML="You're really stubborn, aren't you?";output("You've been called stubborn!")}if(data.fortressDC==10){document.querySelector(".fortressresponce").innerHTML="You knocked on the door ELEVEN times And you're still knocking? come on bruh"}if(data.fortressDC==11){document.querySelector(".fortressresponce").innerHTML="If you click it ONE More time i will reset all your progress.";output("You've been threatened!")}if(data.fortressDC==12){document.querySelector(".fortressresponce").innerHTML="..."}if(data.fortressDC==13){document.querySelector(".fortressresponce").innerHTML="I'm too nice to do that."}if(data.fortressDC==14){document.querySelector(".fortressresponce").innerHTML="What are we doing here, anyway?"}if(data.fortressDC==15){document.querySelector(".fortressresponce").innerHTML="You know there's no one here, right?!!!?!?! so can we <i>please</i> go?"}if(data.fortressDC==16){document.querySelector(".fortressresponce").innerHTML="There's no way that door's going to- uh. it just opened.";output("The door opened!");document.getElementById("fortressdoor").innerHTML="  "}if(data.fortressDC==17){document.querySelector(".fortressresponce").innerHTML="Let's go in this thin-- uh. it just closed.";output("The door closed!");document.getElementById("fortressdoor").innerHTML="##"}if(data.fortressDC==18){document.querySelector(".fortressresponce").innerHTML="It just opened and closed! what is with this cursed door?"}if(data.fortressDC==19){document.querySelector(".fortressresponce").innerHTML="I'm starting to get mad."}if(data.fortressDC==20){document.querySelector(".fortressresponce").innerHTML="Should we kick it?"}if(data.fortressDC==21){document.querySelector(".fortressresponce").innerHTML="I want to set this thing on fire."}if(data.fortressDC==22){document.querySelector(".fortressresponce").innerHTML="*grumble grumble*"}if(data.fortressDC==23){document.querySelector(".fortressresponce").innerHTML="Are you hungry?"}if(data.fortressDC==24){document.querySelector(".fortressresponce").innerHTML="You know we were knocking on this door for the whole night, right?"}if(data.fortressDC==25){document.querySelector(".fortressresponce").innerHTML="Why don't you use the world map on this?"}if(data.fortressDC==26){document.querySelector(".fortressresponce").innerHTML="Um. it just opened. LET'S GO IN! HURRY!";document.getElementById("fortressdoor").innerHTML="  "}if(data.fortressDC>=27){openTab("Castle",this,"white");output("You went inside the fortress!")}};

function whyy(){data.whynot++;if(data.whynot==0){landon.setspeech("I have a very serious disease.");output("You have been told he has a disease.")}if(data.whynot==1){landon.setspeech("I think it's because i was here, in the computer for too long....")}if(data.whynot==2){landon.setspeech("And now, i am beggening to fade, .");output("The probotoad is fading!!")}if(data.whynot==3){landon.setspeech("You can go to the giant library. They have interesting stuff there. but it's probably closed. The key to the door is hidden in the desert. watch out for hyenas. \n Also, i think there is a second key. i don't know where. i heard it's in a store or something. \n Also, there is a medicine that will cure me inside that library. please! oh woe is me")}};

function aprontalk(){data.chefapron++;if(data.chefapron==1){document.getElementById("yay").innerHTML="You may defnitely NOT touch my..."}if(data.chefapron==2){document.getElementById("yay").innerHTML="my..."}if(data.chefapron==3){document.getElementById("yay").innerHTML="uh..."}if(data.chefapron==4){document.getElementById("yay").innerHTML="whatchamacallit."}if(data.chefapron==5){document.getElementById("yay").innerHTML="STOPPIT"}if(data.chefapron==6){yay.innerHTML="RIGHT NOW";output("You've been told to stop!")}if(data.chefapron==7){document.getElementById("yay").innerHTML="That's INUURF"}if(data.chefapron==8){document.getElementById("yay").innerHTML="STOPPPPPIITTTTT"}if(data.chefapron==9){document.getElementById("yay").innerHTML="I will take all your data.money if you won't stop.";output("You've been threatened!")}if(data.chefapron==10){document.getElementById("yay").innerHTML="Ok, say goodbye to your money.";output("Your progress has been set to zero!");data.money=-1;data.chefapron=0}};
var dev = function () {
	data.developermode = true
}

function checkstats() {
	if (data.money >= 5) {
		document.querySelector(".pizzabutton").disabled = false;
	} else {
		document.querySelector(".pizzabutton").disabled = true;
	}
	if (data.money >= 3) {
		document.querySelector(".milkbutton").disabled = false;
	} else {
		document.querySelector(".milkbutton").disabled = true;
	}
	if (data.developermode == true) {
		document.getElementById("menu-developer").style.display = "block"
	} else {
		document.getElementById("menu-developer").style.display = "hidden"
	}
	if (data.libraryKey) {
		document.getElementById("door1").className = 'clickable';
		document.getElementById("door2").className = 'clickable';
		document.getElementById("door1").onclick = 'enterLibrary()';
		document.getElementById("door2").onclick = 'enterLibrary()';
	}
	if (data.white) {
		document.body.style = `background-color:white;color:black;`;
	} else {
		document.body.style = `background-color:black;color:white;`;
	}
}

function enterLibrary() {
	output("You entered the giant library!")
}

function triggerstore2door() {
	openTab('store2door');
	output('You found a door!');
}

function triggerstore2() {
	openTab('store2');
	output('You trespassed in the store!');
}

function lotterymachine(item) {
	if (item == "money") {
		lotterymachinemoney = 1;
		data.lotterymachinemoneyturnedon = true
		output("You turned on the lotterymachine: money")
		document.getElementById("factorymoney").style.color = "green";
		document.getElementById("factorycandies").style.color = "red";
	}
}

function collectmoney() {
	data.lotterymachinemoneyturnedon = false;
	document.getElementById("factorymoney").style.color = "red";
	data.money = data.money + lotterymachinemoney;
	lotterymachinemoney = 0;
}

function getmoneyfactorykey() {
	data.moneyfactorykey = true;
	output("You got the keys to the money factory!")
}

function toggleFullscreen(elem) {
	elem = elem || document.documentElement;

	if (!document.fullscreenElement && !document.mozFullScreenElement &&
		!document.webkitFullscreenElement && !document.msFullscreenElement) {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
}

document.getElementById('btnFullscreen').addEventListener('click', function () {
	toggleFullscreen();
});
function darkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   if (data.white) {
   	data.white = false
   }else {
   	data.white = true
   }
}
