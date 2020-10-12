var textsave = {
	save: function () {
		document.getElementById("textareasave").innerHTML = convertToHex(btoa(btoa(JSON.stringify(data))))
	},
	load: function () {
    try {console.log(atob(atob(convertFromHex(document.getElementById("textareasave").value))))
		data = JSON.parse(atob(atob(convertFromHex(document.getElementById("textareasave").value))))}
    catch (err){
      alert(err)
    }
	}
};