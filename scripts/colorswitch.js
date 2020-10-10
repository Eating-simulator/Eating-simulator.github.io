function triggerColors() {
   if (data.white) {
      data.white = false;
      document.querySelector(".menu").style.backgroundColor = "white"
   } else {
      data.white = true;
      document.querySelector(".menu").style.backgroundColor = "black"
   }
}
