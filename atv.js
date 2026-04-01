
// 1 - uma variável e uma constante (2 ponto)
var nom1 = "Felipe";
const identidade = true;

// 2 - Concatene a var/const e adicione srings (2 ponto) 
console.log("Seu nome é " + nom1 + " e tem identidade?" + " Sistema: " + identidade);

// 3 - interpole a var const adicionando strings (2 ponto)
console.log(`${nom1} não possui identidade? Sistema: ${identidade}`);

// 4 - Use os operadores lógicos AND OR NOT e as estruturas condicionais (2 ponto)
let dia = true;
let noite = false;

if (dia && noite){
    console.log("Está de madrugada.");
} else if (!dia || !noite){
    console.log("Pode sair de casa.");
} else {
    console.log("Que horas são?");
}

// 5 - crie um switch e case para o desafio da equipe (2 ponto)
const ingresso  = true;
const nome = true; //se o nome está na lista ou não.

/*Entrar em um evento
Analogia: Você só entra no evento se tiver ingresso E seu nome estiver na lista. */
switch (ingresso + nome) {
    case true + true:
        console.log("Okay! Pode passar.");
        break;
    case true + false:
        console.log("Falta um dos dois.");
        break;
    case false + false:
        console.log("Está no lugar certo?");
        break;
    default:
        console.log("Erro. Falta de informações.");
        break;
}