var money = 0;
var calories = 0;
var cheese = false;
var dorito = false;
var buttontime = -1;
var worldmap = false;
var lockeddoor = -1
var soldierbuttonpressed = -1;
var fortressdoorclicked = -1
function classchange(classname, changeto){
	document.querySelector("." + classname).innerHTML = changeto;
}
function idchange(idname, changetoid){
	document.getElementById(idname).innerHTML = changetoid;
}
function eat(item) {
	if (item === "pizza") {
		calories += 300
		money -= 5 
		alert("Oh dear. you lost 5 dollars and gained 300 callories!")
	}
	if (item === "gingerbread") {
		calories += 290
		money -= 5 
		alert("Oh dear. you lost 5 dollars! That cookie looks nice though. probably shouldn't eat it.")
	}
	if (item === "milk") {
		calories += 3999
		money -= 3 
		alert("You drunk some milk!")
	}
}
function chefbutton() {
	document.getElementById("yay").innerHTML = "Thanks! the cheese is probably in the store. i dont know about the dorito...";
}
setInterval(function() {
	money = money + 1;
	document.querySelector(".money").innerHTML = money;
	document.querySelector(".calories").innerHTML = calories;
	if (money  >= 5) {
		document.querySelector(".pizzabutton").disabled = false;
	} else {
		document.querySelector(".pizzabutton").disabled = true;
	}
	if (money  >= 3) {
		document.querySelector(".milkbutton").disabled = false;
	} else {
		document.querySelector(".milkbutton").disabled = true;
	}
	if (dorito === true && cheese === true) {
		document.querySelector('.chefresponce1').innerHTML = ' '
		document.getElementById("chefresponce2").innerHTML = " "
		document.getElementById("yay").innerHTML = "Thank you for helping me! as a reward, here is a world map. you'll probably use it more then i do."
		worldmap = true;
	}
}, 1000)

function founddorito() {
	document.querySelector('.chefresponce1').innerHTML = 'Ah! you found my dorito! very much thanks.'
	dorito = true
}

function foundcheese() {
	document.getElementById("chefresponce2").innerHTML = "Ah! you found my cheese! very much thanks."
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
	}
	if (buttontime >= 5){
			openTab('Libraryvault', this, 'white')
	}
}

function changeSoldier() {
	soldierbuttonpressed++;
	if (soldierbuttonpressed == 0) {
		document.querySelector(".soldier").innerHTML = "oH! We'll let you in then."
		document.querySelector(".soldieranswer").innerHTML = "Thanks!"
	}
	if (soldierbuttonpressed >= 1) {
		openTab('vault', this, 'white')
	}
}

function AskLibrarian() {
	document.getElementById("librarianhello").innerHTML = "Good question."
}
function lockdoor() {
	if (lockeddoor == 0){
			document.getElementById("librarianhello").innerHTML = "Ah! that door, is the only known pathway to the unknown regions of the cknairia deserts. but only one thing: I can't unlock it...."
	}
	if (lockeddoor == 1){
		openTab("Desert", this, "white")
	}

}
function ifound() {
	if (worldmap == true) {
		lockeddoor = 1
		document.getElementById("librarianhello").innerHTML = "Good gravy! you found it! the world map! i knew it exist! i Opened the door that leads to the desert. turns out you needed a world map to unlock it. i was wondering. here, let me open the door. just 5 seconds...."
		document.querySelector(".lockeddoor").innerHTML = "An unlocked door"
		setTimeout(function() {
			openTab("Desert", this, "white")
		}, 5000)
	} else {
		document.getElementById("librarianhello").innerHTML = "Then, where is it? LIAR"
	}
}
function fortresdoor() {
   fortressdoorclicked++;
   if (fortressdoorclicked == 0) {
    document.querySelector(".fortressresponce").innerHTML = "No responce. why don't you try again?";   
   };
   if (fortressdoorclicked == 1) {
    document.querySelector(".fortressresponce").innerHTML = ".....";
   };
   if (fortressdoorclicked == 2) {
    document.querySelector(".fortressresponce").innerHTML = "You know there's no one in here, all right?";
   };
   if (fortressdoorclicked == 3) {
    document.querySelector(".fortressresponce").innerHTML = "You're wasting your time. stop.";
   };
   if (fortressdoorclicked == 4) {
    document.querySelector(".fortressresponce").innerHTML = "Do you even know what you're doing?";
   };
   if (fortressdoorclicked == 5) {
    document.querySelector(".fortressresponce").innerHTML = "The sun's almost down.";
   };
   if (fortressdoorclicked == 6) {
    document.querySelector(".fortressresponce").innerHTML = "Uh oh, there's a hyena there.";
   };
   if (fortressdoorclicked == 7) {
    document.querySelector(".fortressresponce").innerHTML = "It's starting to get cold.";
   };
   if (fortressdoorclicked == 8) {
    document.querySelector(".fortressresponce").innerHTML = "Do you even know what you're doing?";
   };
   if (fortressdoorclicked == 9) {
    document.querySelector(".fortressresponce").innerHTML = "You're really stubborn, aren't you?";
   };
   if (fortressdoorclicked == 10) {
    document.querySelector(".fortressresponce").innerHTML = "You knocked on the door ELEVEN times And you're still knocking? come on bruh";
   };
   if (fortressdoorclicked == 11) {
    document.querySelector(".fortressresponce").innerHTML = "If you click it ONE More time i will reset all your progress.";
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
    document.getElementById("fortressdoor").innerHTML = "  ";
   };
   if (fortressdoorclicked == 17) {
    document.querySelector(".fortressresponce").innerHTML = "Let's go in this thin-- uh. it just closed.";
    document.getElementById("fortressdoor").innerHTML = "##";
   };
   if (fortressdoorclicked == 18) {
    document.querySelector(".fortressresponce").innerHTML = "It just opened and closed! what is with this cursed door?";
   };
   if (fortressdoorclicked == 19) {
    document.querySelector(".fortressresponce").innerHTML = "I'm starting t oget mad.";
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
   };




}
function whynot() {
 document.querySelector(".landonno").innerHTML = "Meh, because there's something i want to keep by my self."	
}
var i = 0;
function aprontalk() {
i++;
var yay = document.getElementById("yay");
if (i == 0) {
yay.innerHTML = "You may defnitely NOT touch my...";	
}
if (i == 1) {
yay.innerHTML = "my...";
}
if (i == 2) {
yay.innerHTML = "uh...";
}
if (i == 3) {
yay.innerHTML = "whatchamacallit.";
}
if (i == 4) {
yay.innerHTML = "STOPPIT";
}
if (i == 5) {
yay.innerHTML = "RIGHT NOW";
}
else {
yay.innerHTML = "That's INUURF";
i = 0;
}
}
