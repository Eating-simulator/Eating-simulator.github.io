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
var textsave = {
	save: function () {
		document.getElementById("textareasave").innerHTML = convertToHex(btoa(btoa(JSON.stringify(data))))
	},
	load: function () {
		data = JSON.parse(convertFromHex(atob(atob(document.getElementById("textareasave").value))))
	}
};