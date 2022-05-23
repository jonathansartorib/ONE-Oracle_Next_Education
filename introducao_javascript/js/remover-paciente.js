var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");//coloca classe css no pai do event

    setTimeout(function() {//executa a funcao apos 500ms
        event.target.parentNode.remove(); //remove o pai de quem foi clicado
    }, 500); 
});



/*
    var alvoEvento = event.target; // TD
    var paiDoAlvo = alvoEvento.parentNode; // TR
    paiDoAlvo.remove(); //remove a linha inteira

    event diz quem foi clicado
    event.target.parentNode.remove(); //remove o pai do target
    event.target.remove(); //remove o proprio target
    this.remove(); //this = (dono do evento) atrelado a quem sofreu o evento

*/

