var mexmiasteps = -1
var mexmiahtml = document.getElementById("mexmiaSpeak");
var mexmiaLeft = document.getElementById("mexmiaLeft");
var mexmiaRight = document.getElementById("mexmiaRight");

function mexmiastartover() {
  mexmiasteps = 0;
  document.getElementById("mexmiaeyes").style.color = "red"
  document.getElementById("mexmiaSpeak").innerHTML = "WHAT! You got it wrong!"
  setTimeout(function () {
    document.getElementById("mexmiaeyes").style.color = "black"
    mexmiahtml.innerHTML = "I am Mexmia the Terrible Unicorn!"
    mexmiaLeft.innerHTML = "Why are you called Terrible?";
    mexmiaRight.innerHTML = "Do you even know what terrible means?"
  }, 1000);
}

function mexmiaChoice(lor) {
  document.getElementById("mexmiastart").style.display = "none";
  switch(mexmiasteps) {
    case -1:
      if (lor == "left") {
        mexmiasteps++;
        mexmiahtml.innerHTML = "I am Mexmia the Terrible Unicorn! Answer all of my questions and you'll get a prize."
        document.getElementById("mexmiaquestions").style.display =  "block"
      } else {
        mexmiastartover()
        return;
      }
      break;
    case 0:
      if (lor == "left") {
        mexmiahtml.innerHTML = "Hmmm.. i don't know! \n Second question: if E Implies A And A Implies T, What does T imply?"
        mexmiaLeft.innerHTML = "Of course, that would be the pizza scroll"
        mexmiaRight.innerHTML = "I!"
        mexmiasteps++;
      } else {
        mexmiastartover()
        return;
      }
      break;
    case 1:
        if (lor == "right") {
        mexmiahtml.innerHTML = "That's correct! Now, Who made eating simulator?"
        mexmiaLeft.innerHTML = "Bill Gates"
        mexmiaRight.innerHTML = "Technodoggo, ch1ck3n."
        mexmiasteps++;
        }else {
        mexmiastartover()
        return;
      }
      break;
  case 2:
    if (lor == "left") {
      mexmiahtml.innerHTML = "Troll! Of course ch1ck3n, technodoggo made eating simulator. \n Now, who's the worst person in eating simulator?"
      mexmiaLeft.innerHTML = "Yourself!"
      mexmiaRight.innerHTML = "Landon!"
      mexmiasteps++;
    } else {
      mexmiastartover()
      return;
    }
    break;
    case 3:
      if (lor == "right") {
        mexmiahtml.innerHTML = "Good job! And, the answer is, of course, Landon! \n Next question: Why am i asking you questions?"
        mexmiaLeft.innerHTML = "idk"
        mexmiaRight.innerHTML = "Because you want to give me a prize?"
        mexmiasteps++;
      } else {
        mexmiastartover()
        return;
      }
      break;
    case 4:
      if (lor == "right") {
        mexmiahtml.innerHTML = "Good job! now, what do you think i'm going to give you?"
        mexmiaLeft.innerHTML = "Money!"
        mexmiaRight.innerHTML = "A key to something?"
        mexmiasteps++;
      } else {
        mexmiastartover()
        return;
      }
      break;
    case 5:
      if (lor == "right") {
        mexmiahtml.innerHTML = "That's correct! a key to something! what's the something? the something is: \n a key to a secret money factory i found! i can't remember where it is though... it's somewhere near the library. it's real hidden."
        document.getElementById("mexmiaquestions").style.display =  "none"
        document.getElementById("mexmiastart").style.display = "block";
        document.getElementById("mexmiastart").innerHTML = "Thanks, Mexmia!";
        document.getElementById("mexmiastart").onClick = "getmoneyfactorykey()";
        getmoneyfactorykey()
        mexmiasteps++;
      } else {
        mexmiastartover()
        return;
      }
      break;
  }
}
