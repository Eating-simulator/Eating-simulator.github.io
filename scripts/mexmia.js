var mexmiasteps = 0
  var mexmiahtml = document.getElementById("mexmiaSpeak");
  var mexmiaLeft = document.getElementById("mexmiaLeft");
  var mexmiaRight = document.getElementById("mexmiaRight");
function mexmiastartover() {
  mexmiasteps = 0;
  document.getElementById("mexmiaeyes").style.color = "red"
  document.getElementById("mexmiaSpeak").innerHTML = "WHAT! You got it wrong!"
  setTimeout(function (){
    document.getElementById("mexmiaeyes").style.color = "black"
    mexmiahtml.innerHTML = "I am Mexmia the Terrible Unicorn!"
    mexmiaLeft.innerHTML = "Why are you called Terrible?";
    mexmiaRight.innerHTML = "Do you even know what terrible means?"
  }, 1000)
}
function mexmiaChoice(leftorright) {
  document.getElementById("mexmiastart").style.display = "none";
    switch(mexmiasteps) {
      case 0:
    if (leftorright == "left"){
      mexmiasteps++;
      mexmiahtml.innerHTML = "I am Mexmia the Terrible Unicorn! Answer all of my questions and you'll get a prize."
      document.getElementById("mexmiaquestions").style.display =  "block"
    } else {
      mexmiastartover()
      return;
    }
      case 1:
    if (leftorright == "left"){
      mexmiahtml.innerHTML = "Hmmm.. i don't know! \n Second question: if E Implies A And A Implies T, What does T imply?"
      mexmiaLeft.innerHTML = "Of course, that would be the pizza scroll"
      mexmiaRight.innerHTML = "I!"
      mexmiasteps++;
    } else {
      mexmiastartover()
      return;
    }
      case 2:
    if (leftorright == "right"){
      mexmiahtml.innerHTML = "That's correct! Now, Who made eating simulator?"
      mexmiaLeft.innerHTML = "Bill Gates"
      mexmiaRight.innerHTML = "ID7, Technodoggo, ch1ck3n."
      mexmiasteps++;
    } else {
      mexmiastartover()
      return;
    }
      case 3:
    if (leftorright == "left"){
      mexmiahtml.innerHTML = "Troll! Of course ch1ck3n, technodoggo and ID7 made eating simulator. \n Now, who's the worst person in eating simulator?"
      mexmiaLeft.innerHTML = "Yourself!"
      mexmiaRight.innerHTML = "Landon!"
      mexmiasteps++;
    } else {
      mexmiastartover()
      return;
    }
      case 4:
    if (leftorright == "right"){
      mexmiahtml.innerHTML = "Good job! And, the answer is, of course, Landon! \n Next question: Why am i asking you questions?"
      mexmiaLeft.innerHTML = "idk"
      mexmiaRight.innerHTML = "Because you want to give me a prize?"
      mexmiasteps++;
    } else {
      mexmiastartover()
      return;
    }
      case 5:
    if (leftorright == "right"){
      mexmiahtml.innerHTML = "Good job! now, what do you think i'm going to give you?"
      mexmiaLeft.innerHTML = "Money!"
      mexmiaRight.innerHTML = "A key to something?"
      mexmiasteps++;
    } else {
      mexmiastartover()
      return;
    }
      case 6:
    if (leftorright == "right"){
      mexmiahtml.innerHTML = "That's correct! a key to something! what's the something? the something is: \n a key to a secret money factory i found! i can't remember where it is though... it's somewhere near the library. it's real hidden."
      document.getElementById("mexmiaquestions").style.display =  "none"
      document.getElementById("mexmiastart").style.display = "block";
      document.getElementById("mexmiastart").innerHTML = "Thanks, mexmia!";
      document.getElementById("mexmiastart").onClick = "getmoneyfactorykey()";
      mexmiasteps++;
    } else {
      mexmiastartover()
      return;
    }
  mexmiasteps++;
}
