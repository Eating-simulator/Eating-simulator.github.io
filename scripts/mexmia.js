var mexmiasteps = -1
function mexmiaChoice(leftorright) {
  document.getElementById("mexmiastart").style.display = "none";
  var mexmiahtml = document.getElementById("mexmiaSpeak");
  var mexmiaLeft = document.getElementById("mexmiaLeft");
  var mexmiaRight = document.getElementById("mexmiaRight");
    if (mexmiasteps == -1){
    if (leftorright == "left"){
      mexmiahtml.innerHTML = "I am Mexmia the Terrible Unicorn!"
    } else {
      mexmiastartover()
      return;
    }
  }else if (mexmiasteps == 0){
    if (leftorright == "left"){
      mexmiahtml.innerHTML = "Hmmm.. i don't know! \n Second question: if E Implies A And A Implies T, What does T imply?"
      mexmiaLeft.innerHTML = "Of course, that would be the pizza scroll"
      mexmiaRight.innerHTML = "I!"
      mexmiasteps++;
    } else {
      mexmiastartover()
      return;
    }
  }else if (mexmiasteps == 1) {
    if (leftorright == "right"){
      mexmiahtml.innerHTML = "That's correct! Now, Who made eating simulator?"
      mexmiaLeft.innerHTML = "Bill gates"
      mexmiaRight.innerHTML = "ID7, Techonodogg, ch1ck3n."
      mexmiasteps++;
    } else {
      mexmiastartover()
      return;
    }
}
}
