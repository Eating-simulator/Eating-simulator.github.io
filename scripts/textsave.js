var textsave = {
	save : function() {
		document.getElementById("textareasave").innerHTML = btoa(btoa(JSON.stringify(data)));
	}
}