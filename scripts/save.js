function convertFromHex(b) {
	var b = b.toString();
	var c = "";
	for (var a = 0; a < b.length; a += 2) {
		c += String.fromCharCode(parseInt(b.substr(a, 2), 16))
	}
	return c
}

function convertToHex(c) {
	var b = "";
	for (var a = 0; a < c.length; a++) {
		b += "" + c.charCodeAt(a).toString(16)
	}
	return b
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