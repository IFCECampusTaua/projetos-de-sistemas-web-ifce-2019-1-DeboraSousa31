
function verificar() {
	var n   = document.getElementById("caixaTexto").value;
	if (n > 0 && n < 10) {
		document.getElementById("mostrarMsg").innerHTML = "Insuficiente!";
	}else if (n > 10 && n < 14) {
		document.getElementById("mostrarMsg").innerHTML = "Bom!";
	}else if (n > 14) {
		document.getElementById("mostrarMsg").innerHTML = "Muito Bom!";
	}
}
document.getElementById("but").addEventListener("click", verificar); 