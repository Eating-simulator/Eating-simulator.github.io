var money = 0;
var calories = 0;
var cheese = false;
var dorito = false;
var buttontime = -1;
var worldmap = false;
var lockeddoor = -1
var soldierbuttonpressed = -1;
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
		openTab('desert', this, 'white')
	}

}
function ifound() {
	if (worldmap == true) {
		document.getElementById("librarianhello").innerHTML = "Good gravy! you found it! the world map! i knew it exist! i Opened the door that leads to the desert. turns out you needed a world map to unlock it. i was wondering. here, let me open the door. just 5 seconds...."
		document.querySelector(".lockeddoor").innerHTML = "An unlocked door"
		lockeddoor = 1
		setTimeout(function() {
			openTab('desert', this, 'white')
		}, 5000)
	} else {
		document.getElementById("librarianhello").innerHTML = "Then, where is it? LIAR"
	}
}
