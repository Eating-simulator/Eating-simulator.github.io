// For saving and loading
// Has error, do not work it yet
function convertFromHex(hex) {
    var hex = hex.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function convertToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}
function loadOrSave() {
    if (localStorage.getItem('data')) {
        data = JSON.parse(converFromHex(localStorage.getItem('data')));
    } else {
        save()
    }
}
function save() {
    localStorage.setItem("data", convertToHex(JSON.stringify(data)));
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
function download(yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee, filename, type) {
    var file = new Blob([btoa(btoa(yeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee))], {type: type});
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
            try{
                data=JSON.parse(atob(atob(fr.result))); 
            }
            catch(err){
                alert("Something went wrong.. \n" + err)
            }
            } 
              
            fr.readAsText(this.files[0]); 
        })
/*
* if data in local storage is not null then load the data into data variable
* else save in local storage
*/
loadOrSave();
