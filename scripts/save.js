// For saving and loading
// Has error, do not work it yet

function loadOrSave() {
    if (localStorage.getItem('data')) {
        data = JSON.parse(localStorage.getItem('data'));
    } else {
        save()
    }
}
function save() {
    localStorage.setItem("data", JSON.stringify(data));
}
function loadfile() {
        document.getElementById('inputfile') 
            .addEventListener('change', function() { 
              
            var fr=new FileReader(); 
            fr.onload=function(){ 
			data=JSON.parse(atob(atob(fr.result))); 
            } 
              
            fr.readAsText(this.files[0]); 
        })
}
function download(data, filename, type) {
    var file = new Blob([JSON.stringify(btoa(btoa(data)))], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
        document.getElementById('inputfile') 
            .addEventListener('change', function() { 
              
            var fr=new FileReader(); 
            fr.onload=function(){ 
data=JSON.parse(atob(atob(fr.result))); 
            } 
              
            fr.readAsText(this.files[0]); 
        })
/*
* if data in local storage is not null then load the data into data variable
* else save in local storage
*/
loadOrSave();
