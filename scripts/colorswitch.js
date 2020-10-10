function triggerColors() {
   if (data.white) {
      data.white = false;
      document.querySelector(".menu").style.backgroundColor = "black"
   } else {
      data.white = true;
      document.querySelector(".menu").style.backgroundColor = "white"
   }
}
