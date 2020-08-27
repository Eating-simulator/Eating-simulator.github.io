// For saving and loading
// Has error, do not work it yet

thevariables = ['money', 'calories', 'cheese', 'dorito', 'buttontime', 'worldmap', 'lockeddoor', 'soldierbuttonpressed', 'fortressdoorclicked', 'chefapron', 'whynot', 'libraryKey', 'fWM', 'popularity', 'howpopular', 'moneypersecond', 'calDec', 'lotterymachinemoney', 'lotterymachineturnedon'];

function strToOther(string) {
    if (typeof string == 'string') {
        return 'string'
    }
}

function checkNull(variable) {
    if (localStorage.getItem(variable) == null) {
        return true;
    } else {
        return false;
    }
}

for (variable in thevariables) {
    if (checkNull(variable)) {
        localStorage.setItem(variable, variable);
    } else {
        variable = localStorage.getItem(variable);
    }
}
