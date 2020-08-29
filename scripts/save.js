// For saving and loading
// Has error, do not work it yet

function checkNull(variable) {
    return (localStorage.getItem(variable) == null);
}

function checkSave() {
    if (localStorage.getItem('data')) {
        data = localStorage.getItem('data');
    } else {
        localStorage.setItem('data',data);
    }
}
/*
* if data in local storage is not null then load the data into data variable
* else save in local storage
*/
checkSave();
