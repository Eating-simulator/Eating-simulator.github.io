function openTab(tabName,elmnt,color) {
  checkstats();
  output(`You went to the ${tabName}!`);
  document.getElementById("title").innerHTML = "Th3 Eat↑ng $↑mµlat0r - ch↑ck3n T3chn0d0gg0 -- " + tabName;
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(tabName).style.display = "block";
}
