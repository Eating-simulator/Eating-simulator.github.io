var textsave = {
	save: function () {
		document.getElementById("textareasave").innerHTML = convertToHex(btoa(btoa(JSON.stringify(data))))
	},
	load: function () {
		data = JSON.parse(atob(atob(convertFromHex(document.getElementById("textareasave").value))))
	}
};