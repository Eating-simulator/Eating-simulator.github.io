//Deleted filefunction openTab(tabName,elmnt,color) {
2
  var i, tabcontent, tablinks;
3
  tabcontent = document.getElementsByClassName("tabcontent");
4
  for (i = 0; i < tabcontent.length; i++) {
5
    tabcontent[i].style.display = "none";
6
  }
7
  tablinks = document.getElementsByClassName("tablink");
8
  for (i = 0; i < tablinks.length; i++) {
9
    tablinks[i].style.backgroundColor = "";
10
  }
11
  document.getElementById(tabName).style.display = "block";
12
  elmnt.style.backgroundColor = color;
13
​
14
}
15
// Get the element with id="defaultOpen" and click on it
16
document.getElementById("defaultOpen").click();
17
