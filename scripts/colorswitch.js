function triggerColors() {
   if (data.white) {
      data.white = false;
      document.querySelector(".menu").style.backgroundColor = "black"
      document.querySelector(".output").style.border = "3px solid #FFFFFF"
   } else {
      data.white = true;
      document.querySelector(".menu").style.backgroundColor = "white"
      document.querySelector(".output").style.border = "3px solid #000000"
   }
}
