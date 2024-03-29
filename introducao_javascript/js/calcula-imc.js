
var titulo = document.querySelector(".titulo"); //seleciona tag 
titulo.textContent = "Aparecida Nutricionista"; //modifica o texto

// a funcao querySelector traz apenas um elemento
// por exemplo a classe .paciente so traz o primeiro e nao todos que tema a classe
//querySelectorAll retona array com todos que tem a mesma tag



//             ++CALCULAR IMC E VALIDAR CAMPOS++

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";        //e vai aletrar o stilo tambem
		paciente.classList.add("paciente-invalido");//adiciona essa class a tag HTML
    }                        //boa pratica alterar assim para todo stilo ficar no css

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";//melhor usar forma acima das classes
		paciente.style.backgroundColor = "lightcoral";//nao pode utilizar o -
    }                                                 //tem que utilizar camelCase

  if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
	var imc = 0;
	
	imc = peso / (altura * altura);
	
	return imc.toFixed(2); // tofixed(quantidade de casas decimais)
}























