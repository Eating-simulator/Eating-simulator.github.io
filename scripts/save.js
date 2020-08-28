// For saving and loading
// Has error, do not work it yet

function checkNull(variable) {
    if (localStorage.getItem(variable) == null) {
        return true;
    } else {
        return false;
    }
}

function checkSave() {
    if (localStorage.getItem('data') == undefined) {
        localStorage.setItem('data', data);
        console.log("data is null")
    } else {
        data = localStorage.getItem('data');
        console.log(data)
    }
}

checkSave();
