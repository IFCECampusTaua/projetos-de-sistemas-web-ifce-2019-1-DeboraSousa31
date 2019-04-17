
function mostrar() {
	var text = "";
	var x = document.getElementById("caixaTexto").value;
	var i;
		for (i = 1; i <= x; i++) {
	  		text += "IFCE " + i + "<br>";
		}
	document.getElementById("Msg").innerHTML = text;
}