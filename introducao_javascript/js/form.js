var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
 
    var paciente =  obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return; //return vazio sai da funcao
    }

    adicionaPacienteNaTabela(paciente);
    
    form.reset();// limpa os dados das caixas texto

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; // limpa as mensagens de erro se existirem quando adiciona com sucesso

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = ""; //limpa as li dentro da ul

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco")
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso Inválido!");
    }

    if(paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco")
    }

    //quando o if é simples pode se retirar a chave
    if(!validaAltura(paciente.altura)) erros.push("Altura Inválida!");

    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco")
    }

    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco")
    }
    
    return erros;
}
 




