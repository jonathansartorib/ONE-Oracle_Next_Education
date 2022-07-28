/*             ++ESCUTAR EVENTO++

titulo.addEventListener("click", mostraMensagem);
variavel titulo quando clicado vai chamar a funcao enostrar msg no Log

function mostraMensagem() {
	console.log("Ola eu fui clicado!");
}

*/


//             ++ADICIONAR PACIENTE++

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault(); //previne efeito padrao que seria recarregar a pagina
	
	var form = document.querySelector("#form-adiciona");
	
	var paciente = obtemPacienteDoFormulario(form);
	
	
	
	var pacienteTr = document.createElement("tr"); //cria elemento html
	
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");
	
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calculaImc(peso, altura);
	
	pacienteTr.appendChild(nomeTd); //colocar as td dentro da tr no html
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);
	
	
	var tabela = document.querySelector("#tabela-pacientes");
	
	tabela.appendChild(pacienteTr);//colocar tr dentro da table

});

function obtemPacienteDoFormulario(form) {
	
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
	
}

