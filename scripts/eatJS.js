// JavaScript file (c) Copyright 2020 ckn, technodoggo. All rights reserved. 
// This file may not be reproduced. 
var money = 0;
var calories = 300;
var cheese = false;
var dorito = false;
var buttontime = -1;
var worldmap = false;
var lockeddoor = -1
var soldierbuttonpressed = -1;
var fortressdoorclicked = -1
var chefapron = 0;
var whynot = -1;
var libraryKey = false;
var fWM = false;
var popularity = 0;
var howpouplar = "Not known"
var moneypersecond = 1;
var caloriepersecond = 1;
function classchange(classname, changeto){
	document.querySelector("." + classname).innerHTML = changeto;
}
function idchange(idname, changetoid){
	document.getElementById(idname).innerHTML = changetoid;
}
function CheckPouplarity() {
  if (popularity >= 0) {
    howpouplar = "Not known"
  }
  if (popularity >= 1) {
    howpouplar = "Only a few people know you"
  }
}
function eat(item) {
	if (item === "pizza") {
		calories += 300
		money -= 5 
		output("Oh dear. you lost 5 dollars and gained 300 callories!")
	}
	if (item === "gingerbread") {
		money -= 5 
		output("Oh dear. you lost 5 dollars! That cookie looks nice though. probably shouldn't eat it.")
	}
	if (item === "milk") {
		calories += 299
		money -= 3 
		output("You drunk some milk!")
	}
}
function chefbutton() {
	document.getElementById("yay").innerHTML = "Thanks! the cheese is probably in the store. i dont know about the dorito...";
  popularity += 1
  output("You started the quest.")
}
setInterval(function() {
	money++;
  if (calories != 0) {
    calories--;
  }
  if (calories < 60) {
    output(" Your calories are low. Better eat something! You only have one minute left!")
  }
  if (calories < 10) {
    output("URGENT! You need to eat something, and fast! Ten seconds!")
  }
  if (calories == 0) {
    output("Too bad. You starved to death.")
    setTimeout(function() {
      window.location.href = window.location.href;
    }, 1000);
  }
	document.querySelector(".money").innerHTML = money;
	document.querySelector(".calories").innerHTML = calories;
	if (money  >= 5) {
		document.getElementById(".pizzabutton").disabled = false;
	} else {
		document.getElementById(".pizzabutton").disabled = true;
	}
	if (money  >= 3) {
		document.getElementById(".milkbutton").disabled = false;
	} else {
		document.getElementById(".milkbutton").disabled = true;
	}
	if (dorito === true && cheese === true) {
		if (fWM == false) {
		document.querySelector('.chefresponce1').innerHTML = ' '
		document.getElementById("chefresponce2").innerHTML = " "
		document.getElementById("yay").innerHTML = "Thank you for helping me! as a reward, here is a world map. you'll probably use it more then i do."
                popularity += 0.7
                output("You completed the quest and earned a world map!")
		worldmap = true;
		fWM = true;
		}
	}
	document.querySelector(".money").innerHTML = money;
	console.log("Calories: " + calories)
	document.querySelector(".calories").innerHTML = calories;
}, 1000)

function founddorito() {
	document.querySelector('.chefresponce1').innerHTML = 'Ah! you found my dorito! very much thanks.'
  output("You found the dorito!")
	dorito = true
}

function foundcheese() {
	document.getElementById("chefresponce2").innerHTML = "Ah! you found my cheese! very much thanks."
  output("You found the cheese!")
	cheese = true;
}

function librarypathway() {
	buttontime++;
	if (buttontime == 0){
			document.getElementById("librarianhello").innerHTML = "Oh! please don't go there. all our important ancient writings are in there. please don't even dare to go in there. if you do, you will find the- oops. i said too much."
	}
	if (buttontime == 1){
			document.getElementById("librarianhello").innerHTML = "What did i just say? you can't go in there!"
	}
	if (buttontime == 2){
			document.getElementById("librarianhello").innerHTML = "That is the library's top priority! Pleaassseeee do not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not not go in there!"
	}
	if (buttontime == 3){
			document.getElementById("librarianhello").innerHTML = "Hello?! i just said the word 'not' seven hundred and seventy and you still want to go!?!?!?"
	}
	if (buttontime == 4){
			document.getElementById("librarianhello").innerHTML = "Fine. just go. *groan*"
      output("The librarian gave you permission to go inside the vault")
	}
	if (buttontime >= 5){
			openTab('Libraryvault', this, 'white')
	}
}
function output(output) {
  document.getElementById("output").innerHTML = output;
}
function changeSoldier() {
	soldierbuttonpressed++;
	if (soldierbuttonpressed == 0) {
		document.getElementById(".soldier").innerHTML = "oH! We'll let you in then."
    output("The soldier let you in!")
		document.getElementById(".soldieranswer").innerHTML = "Thanks!"
	}
	if (soldierbuttonpressed >= 1) {
		openTab('vault', this, 'white')
    output("You went inside the vault!")
	}
}

function AskLibrarian() {
	document.getElementById("librarianhello").innerHTML = "Good question."
  output("You asked the librarian a question!")
}
function lockdoor() {
	if (lockeddoor == 0){
			document.getElementById("librarianhello").innerHTML = "Ah! that door, is the only known pathway to the unknown regions of the cknairia deserts. but only one thing: I can't unlock it...."
	}
	if (lockeddoor == 1){
		openTab("Desert", this, "white")
    output("You entered the desert!")
	}

}
function ifound() {
	if (worldmap == true) {
		lockeddoor = 1
		document.getElementById("librarianhello").innerHTML = "Good gravy! you found it! the world map! i knew it exist! i Opened the door that leads to the desert. turns out you needed a world map to unlock it. i was wondering. here, let me open the door. just 5 seconds...."
		document.querySelector(".lockeddoor").innerHTML = "An unlocked door"
		setTimeout(function() {
			openTab("Desert", this, "white")
      output("You entered the desert!")
		}, 5000)
	} else {
		document.getElementById("librarianhello").innerHTML = "Then, where is it? LIAR"
    output("You've been called a liar!")
	}
}
function fortresdoor() {
   fortressdoorclicked++;
   if (fortressdoorclicked == 0) {
    document.querySelector(".fortressresponce").innerHTML = "No responce. why don't you try again?";   
    output("You've been ignored!")
   };
   if (fortressdoorclicked == 1) {
    document.querySelector(".fortressresponce").innerHTML = ".....";
   };
   if (fortressdoorclicked == 2) {
    document.querySelector(".fortressresponce").innerHTML = "You know there's no one in here, all right?";
    output("You've been told no one is in here!")
   };
   if (fortressdoorclicked == 3) {
    document.querySelector(".fortressresponce").innerHTML = "You're wasting your time. stop.";
    output("You've been told you're wasting your time!")
   };
   if (fortressdoorclicked == 4) {
    document.querySelector(".fortressresponce").innerHTML = "Do you even know what you're doing?";
    output("You've been asked whether you know what you're doing!")
   };
   if (fortressdoorclicked == 5) {
    document.querySelector(".fortressresponce").innerHTML = "The sun's almost down.";
   };
   if (fortressdoorclicked == 6) {
    document.querySelector(".fortressresponce").innerHTML = "Uh oh, there's a hyena there.";
   };
   if (fortressdoorclicked == 7) {
    document.querySelector(".fortressresponce").innerHTML = "It's starting to get cold.";
    output("It's starting to get cold!")
   };
   if (fortressdoorclicked == 8) {
    document.querySelector(".fortressresponce").innerHTML = "Do you even know what you're doing?";
    output("You've been told you're wasting your time!")
   };
   if (fortressdoorclicked == 9) {
    document.querySelector(".fortressresponce").innerHTML = "You're really stubborn, aren't you?";
    output("You've been called stubborn!")
   };
   if (fortressdoorclicked == 10) {
    document.querySelector(".fortressresponce").innerHTML = "You knocked on the door ELEVEN times And you're still knocking? come on bruh";
   };
   if (fortressdoorclicked == 11) {
    document.querySelector(".fortressresponce").innerHTML = "If you click it ONE More time i will reset all your progress.";
    output("You've been threatened!")
   };
   if (fortressdoorclicked == 12) {
    document.querySelector(".fortressresponce").innerHTML = "...";
   };
   if (fortressdoorclicked == 13) {
    document.querySelector(".fortressresponce").innerHTML = "I'm too nice to do that.";
   };
   if (fortressdoorclicked == 14) {
    document.querySelector(".fortressresponce").innerHTML = "What are we doing here, anyway?";
   };
   if (fortressdoorclicked == 15) {
    document.querySelector(".fortressresponce").innerHTML = "You know there's no one here, right?!!!?!?! so can we <i>please</i> go?";
   };
   if (fortressdoorclicked == 16) {
    document.querySelector(".fortressresponce").innerHTML = "There's no way that door's going to- uh. it just opened.";
    output("The door opened!")
    document.getElementById("fortressdoor").innerHTML = "  ";
   };
   if (fortressdoorclicked == 17) {
    document.querySelector(".fortressresponce").innerHTML = "Let's go in this thin-- uh. it just closed.";
    output("The door closed!")
    document.getElementById("fortressdoor").innerHTML = "##";
   };
   if (fortressdoorclicked == 18) {
    document.querySelector(".fortressresponce").innerHTML = "It just opened and closed! what is with this cursed door?";
   };
   if (fortressdoorclicked == 19) {
    document.querySelector(".fortressresponce").innerHTML = "I'm starting to get mad.";
   };
   if (fortressdoorclicked == 20) {
    document.querySelector(".fortressresponce").innerHTML = "Should we kick it?";
   };
   if (fortressdoorclicked == 21) {
    document.querySelector(".fortressresponce").innerHTML = "I want to set this thing on fire.";
   };
   if (fortressdoorclicked == 22) {
    document.querySelector(".fortressresponce").innerHTML = "*grumble grumble*";
   };
   if (fortressdoorclicked == 23) {
    document.querySelector(".fortressresponce").innerHTML = "Are you hungry?";
   };
   if (fortressdoorclicked == 24) {
    document.querySelector(".fortressresponce").innerHTML = "You know we were knocking on this door for the whole night, right?";
   };
   if (fortressdoorclicked == 25) {
    document.querySelector(".fortressresponce").innerHTML = "Why don't you use the world map on this?";
   };
   if (fortressdoorclicked == 26) {
    document.querySelector(".fortressresponce").innerHTML = "Um. it just opened. LET'S GO IN! HURRY!";
    document.getElementById("fortressdoor").innerHTML = "  ";
   };
   if (fortressdoorclicked >= 27) {
    openTab("Castle", this, "white")
    output("You went inside the fortress!")
   };



var whynothtml = document.querySelector(".landonno");
}
function whyy() {
	whynot++;
   if (whynot == 0) {
     document.querySelector(".landonno").innerHTML = "I am Rainbow the Wise Probotoad."   
     output("You've been told he was a wise probotoad!")
   };
   if (whynot == 1) {
     document.querySelector(".landonno").innerHTML = "Because my dad was a Proboscis Monkey and my mom was a toad."   
   };
   if (whynot == 2) {
     document.querySelector(".landonno").innerHTML = "Just Joking! Both my parents were Probotoads."  
     output("The probotoad joked!") 
   };
   if (whynot == 3) {
     document.querySelector(".landonno").innerHTML = "You can go to the giant library. They have interesting stuff there. but it's probably closed. The key to the door is hidden in the desert. watch out for hyenas." 
   };
}
function aprontalk() {
chefapron++;
if (chefapron == 1) {
document.getElementById("yay").innerHTML = "You may defnitely NOT touch my...";	
}
if (chefapron == 2) {
document.getElementById("yay").innerHTML = "my...";
}
if (chefapron == 3) {
document.getElementById("yay").innerHTML = "uh...";
}
if (chefapron == 4) {
document.getElementById("yay").innerHTML = "whatchamacallit.";
}
if (chefapron == 5) {
document.getElementById("yay").innerHTML = "STOPPIT";
}
if (chefapron == 6) {
yay.innerHTML = "RIGHT NOW";
output("You've been told to stop!")
}
if (chefapron == 7) {
document.getElementById("yay").innerHTML = "That's INUURF";
}
if (chefapron == 8) {
document.getElementById("yay").innerHTML = "STOPPPPPIITTTTT";
}
if (chefapron == 9) {
document.getElementById("yay").innerHTML = "I will take all your money if you won't stop.";
output("You've been threatened!")
}
if (chefapron == 10) {
document.getElementById("yay").innerHTML = "Ok, say goodbye to your money.";
output("Your progress has been set to zero!")
money = -1
chefapron = 0
}
}
function checkstats() {
    if (libraryKey) {
        document.getElementById("door1").class = 'clickable';
	document.getElementById("door2").class = 'clickable';
	document.getElementById("door1").onclick = 'enterLibrary()';
	document.getElementById("door2").onclick = 'enterLibrary()';
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
