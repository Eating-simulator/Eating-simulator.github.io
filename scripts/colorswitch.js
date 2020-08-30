var mode = 0

function triggerColors() {
   var element = document.body;
   element.classList.toggle("dark-mode");
  if (mode == 0) {
  document.querySelector(".output").className = "output-white"
  mode = 1
  } else {
   document.querySelector(".output").className = "output"
   mode = 0
  }
}
