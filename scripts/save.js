function convertFromHex(b) {
	b = b.hexDecode()
	return b
}
function String.prototype.hexEncode() {
	
  var hexStr = "0123456789ABCDEF";
  var low = String % 16;
  var high = (String - low)/16;
  var hex = "" + hexStr.charAt(high) + hexStr.charAt(low);
  
  return hex;
}
String.prototype.hexDecode = function() { return parseInt(String,16); }


    return back;
}
//Functions from https://stackoverflow.com/questions/21647928/javascript-unicode-string-to-hex/21648161#21648161
function convertToHex(c) {
	c = c.hexEncode()
	return c
}

function loadOrSave() {
	if (localStorage.getItem("data")) {
		data = JSON.parse(convertFromHex(localStorage.getItem("data")))
	} else {
		save()
	}
}

function save() {
	localStorage.setItem("data", convertToHex(JSON.stringify(data)))
}

function loadfile() {
	document.getElementById("inputfile").addEventListener("change", function () {
		var a = new FileReader();
		a.onload = function () {
			data = JSON.parse(atob(atob(a.result)))
		};
		a.readAsText(this.files[0])
	})
}

function download(g, c, f) {
	var e = new Blob([btoa(btoa(g))], {
		type: f
	});
	if (window.navigator.msSaveOrOpenBlob) {
		window.navigator.msSaveOrOpenBlob(e, c)
	} else {
		var b = document.createElement("a"),
			d = URL.createObjectURL(e);
		b.href = d;
		b.download = c;
		document.body.appendChild(b);
		b.click();
		setTimeout(function () {
			document.body.removeChild(b);
			window.URL.revokeObjectURL(d)
		}, 0)
	}
}
document.getElementById("inputfile").addEventListener("change", function () {
	var a = new FileReader();
	a.onload = function () {
		try {
			data = JSON.parse(atob(atob(a.result)))
		} catch (b) {
			alert("Something went wrong.. \n" + b)
		}
	};
	a.readAsText(this.files[0])
});
loadOrSave();
