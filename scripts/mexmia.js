// mexmia's code

var choice;
var mmStage = 0;

function mexmiaChoice(side) {
  choice = side;
}

function mexmia() {
  var mexmia = document.getElementById("mexmiaSpeak");
  switch (mmStage) {
    case 0:
      if (choice == 'left') {
        mexmia.innerHTML = ''
  }
}
