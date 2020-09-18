var george = new XMLHttpRequest();
george.open("GET", "https://eating-simulator.github.io/credits.JSON", false);
var olddata = JSON.parse(george.responseText).data;
setInterval(function (){
george.open("GET", "https://eating-simulator.github.io/credits.JSON", false);
if (george.responceText != olddata){
  alert("A new update is available. much reload?")
}
}, 1000)
