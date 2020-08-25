function openTab(tabName,elmnt,color) {
  checkstats();
  output(`You went to the ${tabName}!`);
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of ce259c5... Very much sigh why am i even doing this
  document.getElementById(tabName).style.display = "block";
<<<<<<< HEAD
=======
  elmnt.style.backgroundColor = color;
>>>>>>> parent of 76cce81... remove changecolor element from openTab function
}
<<<<<<< HEAD
=======
>>>>>>> parent of 0c58715... Revert "remove changecolor element from openTab function"
=======
>>>>>>> parent of 0c58715... Revert "remove changecolor element from openTab function"
=======
>>>>>>> parent of ce259c5... Very much sigh why am i even doing this
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
