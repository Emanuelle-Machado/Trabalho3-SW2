document.addEventListener('DOMContentLoaded', () => {
    
let userPlacar = 0;
let computadorPlacar = 0;
const userPlacar_span = document.getElementById("user-placar");
const computadorPlacar_span = document.getElementById("computador-placar");
const placar_div = document.querySelector(".placar");
const resultado_p = document.querySelector(".resultado > p");
const pedra_div = document.getElementById("r");
const papel_div = document.getElementById("p");
const tesoura_div = document.getElementById("s");

function getEscolhaComputador(){
    const escolhas = ["r", "p", "s"];
    const NumeroAleatorio = Math.floor(Math.random() * 3);
    return escolhas[NumeroAleatorio];
}

function convertePalavra(letra){
    if(letra === "r") return "Pedra";
    if(letra === "p") return "Papel";
    return "Tesoura";
}

function vence(escolhaUser, escolhaComputador){
    const menorUser = "user".fontsize(3).sup();
    const menorComp = "comp".fontsize(3).sup();
    const escolhaUser_div = document.getElementById(escolhaUser);
    userPlacar++;
    userPlacar_span.innerHTML = userPlacar;
    computadorPlacar_span.innerHTML = computadorPlacar;
    resultado_p.innerHTML = `${convertePalavra(escolhaUser)}${menorUser} derrota ${convertePalavra(escolhaComputador)}${menorComp}. Você venceu!`;
    escolhaUser_div.classList.add('brilho-verde');
    setTimeout( () => escolhaUser_div.classList.remove('brilho-verde'), 300);

}

function perde(escolhaUser, escolhaComputador){
    const menorUser = "user".fontsize(3).sup();
    const menorComp = "comp".fontsize(3).sup();
    const escolhaUser_div = document.getElementById(escolhaUser);
    computadorPlacar++;
    userPlacar_span.innerHTML = userPlacar;
    computadorPlacar_span.innerHTML = computadorPlacar;
    resultado_p.innerHTML = `${convertePalavra(escolhaUser)}${menorUser} perde para ${convertePalavra(escolhaComputador)}${menorComp}. Você perdeu...`;
    escolhaUser_div.classList.add('brilho-vermelho');
    setTimeout( () => escolhaUser_div.classList.remove('brilho-vermelho'), 300);

}

function empata(escolhaUser, escolhaComputador){
    const menorUser = "user".fontsize(3).sup();
    const menorComp = "comp".fontsize(3).sup();
    const escolhaUser_div = document.getElementById(escolhaUser);
    resultado_p.innerHTML = `${convertePalavra(escolhaUser)}${menorUser} é igual a ${convertePalavra(escolhaComputador)}${menorComp}. É um empate.`;
    escolhaUser_div.classList.add('brilho-cinza');
    setTimeout( () => escolhaUser_div.classList.remove('brilho-cinza'), 300);

}

function game(escolhaUser) {
    const escolhaComputador = getEscolhaComputador();
    switch (escolhaUser + escolhaComputador) {
        case "rs":
        case "pr":
        case "sp":
            vence(escolhaUser, escolhaComputador);
            break;
        case "rp":
        case "ps":
        case "sr":
            perde(escolhaUser, escolhaComputador);
            break;
        case "rr":
        case "pp":
        case "ss":
            empata(escolhaUser, escolhaComputador);
            break;

    }
}

function main() {

pedra_div.addEventListener('click', () => game("r") );

papel_div.addEventListener('click', () => game("p") );

tesoura_div.addEventListener('click', () => game("s"));

}

main();

}) 



