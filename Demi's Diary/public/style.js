// JAVASCRIPT DO QUIZ

var correta = Number(0);
function avancar() {
    var resposta1 = questao1.value;


    if (resposta1 == "") {
        alert("Escolha uma opção para prosseguir!");
    } else if (resposta1 == 'certa1') {

        correta++;
        document.getElementById("grupo1").style.display = "none";
        document.getElementById("grupo2").style.display = "flex";

    } else {
        document.getElementById("grupo1").style.display = "none";
        document.getElementById("grupo2").style.display = "flex";
    }

}

function avancar2() {
    var resposta2 = questao2.value;

    if (resposta2 == "") {

        alert("Escolha uma opção para prosseguir!");

    } else if (resposta2 == 'certa2') {

        correta++;
        document.getElementById("grupo2").style.display = "none";
        document.getElementById("grupo3").style.display = "flex";

    } else {

        document.getElementById("grupo2").style.display = "none";
        document.getElementById("grupo3").style.display = "flex";
    }

}

function avancar3() {
    var resposta3 = questao3.value;

    if (resposta3 == "") {
        alert("Escolha uma opção para prosseguir!");
    } else if (resposta3 == 'certa3') {

        correta++;
        document.getElementById("grupo3").style.display = "none";
        document.getElementById("grupo4").style.display = "flex";
    } else {
        document.getElementById("grupo3").style.display = "none";
        document.getElementById("grupo4").style.display = "flex";
    }

}

function avancar4() {
    var resposta4 = questao4.value;


    if (resposta4 == "") {
        alert("Escolha uma opção para prosseguir!");
    } else if (resposta4 == 'certa4') {
        correta++;
        document.getElementById("grupo4").style.display = "none";
        document.getElementById("grupo5").style.display = "flex";

    } else {
        document.getElementById("grupo4").style.display = "none";
        document.getElementById("grupo5").style.display = "flex";
    }
}

function avancar5() {
    var resposta5 = questao5.value;


    if (resposta5 == "") {
        alert("Escolha uma opção para prosseguir!");
    } else if (resposta5 == 'certa5') {
        correta++;
        document.getElementById("grupo5").style.display = "none";
        document.getElementById("grupo6").style.display = "flex";

    } else {
        document.getElementById("grupo5").style.display = "none";
        document.getElementById("grupo6").style.display = "flex";
    }
}

function avancar6() {
    var resposta6 = questao6.value;


    if (resposta6 == "") {
        alert("Escolha uma opção para prosseguir!");
    } else if (resposta6 == 'certa6') {
        correta++;
        document.getElementById("grupo6").style.display = "none";
        document.getElementById("grupo7").style.display = "flex";

    } else {
        document.getElementById("grupo6").style.display = "none";
        document.getElementById("grupo7").style.display = "flex";
    }
}

function avancar7() {
    var resposta7 = questao7.value;


    if (resposta7 == "") {
        alert("Escolha uma opção para prosseguir!");
    } else if (resposta7 == 'certa7') {
        correta++;
        document.getElementById("grupo7").style.display = "none";
        document.getElementById("grupo8").style.display = "flex";

    } else {
        document.getElementById("grupo7").style.display = "none";
        document.getElementById("grupo8").style.display = "flex";
    }
}

function avancar8() {
    var resposta8 = questao8.value;

    if (resposta8 == "") {
        alert("Escolha uma opção para prosseguir!");
    } else if (resposta8 == 'certa8') {
        correta++;
        document.getElementById("grupo8").style.display = "none";
        document.getElementById("grupo9").style.display = "flex";

    } else {
        document.getElementById("grupo8").style.display = "none";
        document.getElementById("grupo9").style.display = "flex";

    }
}

function avancar9() {
    var resposta9 = questao9.value;

    if (resposta9 == "") {
        alert("Escolha uma opção para prosseguir!");
    } else if (resposta9 == 'certa9') {
        correta++;
        document.getElementById("grupo9").style.display = "none";
        document.getElementById("grupo10").style.display = "flex";

    } else {
        document.getElementById("grupo9").style.display = "none";
        document.getElementById("grupo10").style.display = "flex";

    }
}
function finalizar() {
    var questoes_corretas = [];
    var resposta10 = questao10.value; 

    if (resposta10 == "") {
        alert("Escolha uma opção para prosseguir!");
        return; // Exit the function to prevent further execution
    } else if (resposta10 == 'certa10') {
        correta++;
    }

    var porcentagem = (correta / 10) * 100;
    questoes_corretas.push(correta);

    document.getElementById("grupo10").style.display = "none";
    document.getElementById("grupo11").style.display = "flex";

    
    div_mensagem.innerHTML += `A sua Pontuação Foi De <span style="color:blue;">${correta}</span>/10 <br>
    A sua porcentagem de acerto é de: ${porcentagem}%<br>
    Veja se você está no nosso Top10! Acesse a nossa Dashboard`;
}