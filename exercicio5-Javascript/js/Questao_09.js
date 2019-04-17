var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  	
    var valorSalario = document.getElementById("salario_atual").value;
   
    if (valorSalario <= 280) {

    	var valorAumento = valorSalario * 0.2;
    	var novoSalario = valorSalario * 1.2;

    	var arredondado = parseFloat(novoSalario.toFixed(0));
      var arredondado = parseFloat(valorAumento.toFixed(0));

  		document.getElementById("novo_sal").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("sal_antes").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("perc_aumento").innerHTML = "20%";
  		document.getElementById("valor_aumento").innerHTML = "R$" + " " + arredondado + ",00";

    }else if (valorSalario > 280 && valorSalario <= 700) {

    	var valorAumento = valorSalario * 0.15;
    	var novoSalario = valorSalario * 1.15;

    	var arredondado = parseFloat(novoSalario.toFixed(0));
      var arredondado = parseFloat(valorAumento.toFixed(0));

  		document.getElementById("novo_sal").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("sal_antes").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("perc_aumento").innerHTML = "15%";
  		document.getElementById("valor_aumento").innerHTML = "R$" + " " + arredondado + ",00";

    }else if (valorSalario > 700 && valorSalario <= 1500) {

    	var valorAumento = valorSalario * 0.1;
    	var novoSalario = valorSalario * 1.1;

    	var arredondado = parseFloat(novoSalario.toFixed(0));
  		var arredondado = parseFloat(valorAumento.toFixed(0));

      document.getElementById("novo_sal").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("sal_antes").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("perc_aumento").innerHTML = "10%";
  		document.getElementById("valor_aumento").innerHTML = "R$" + " " + arredondado + ",00";

  	}else if (valorSalario > 1500) {

    	var valorAumento = valorSalario * 0.05;
    	var novoSalario = valorSalario * 1.05;

    	var arredondado = parseFloat(novoSalario.toFixed(0));
      var arredondado = parseFloat(valorAumento.toFixed(0));

  		document.getElementById("novo_sal").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("sal_antes").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("perc_aumento").innerHTML = "5%";
  		document.getElementById("valor_aumento").innerHTML = "R$" + " " + arredondado + ",00";
  	}
}); 