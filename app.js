/*
Equipe 1:
Francisco Walterson 
Jessica Lima
Gerson Souza
Anderlan Pinheiro


*/




// 1 - variável e constante
let nome = "Jessica";
const filme = "Anaconda";

// 2 - concatenação
let mensagem = "Seja bem vinda " + nome + ", você escolheu o filme " + filme;

// 3 - interpolação
let mensagem2 = `Seja bem vinda  ${nome}, você escolheu o filme ${filme}`;

console.log(mensagem);
console.log(mensagem2);

// ------------------------------
// 4 - operadores lógicos

let comprouIngresso = true;
let chegouAntes = false;
let temConvite = true;

//  AND (&&) → precisa das duas coisas
if (comprouIngresso && chegouAntes) {
  console.log("Pode assistir ");
} else {
  console.log("Não pode assistir ");
}

//  OR (||) → precisa de pelo menos uma
if (comprouIngresso || temConvite) {
  console.log("Pode assistir ");
} else {
  console.log("Não pode assistir ");
}

//  NOT (!) → inverte o valor
if (!chegouAntes) {
  console.log("Você chegou atrasado ");
} else {
  console.log("Você chegou no horário");
}

// ------------------------------
// 5 - switch

let opcao = "combo";

switch (opcao) {
  case "pipoca":
    console.log("Você escolheu pipoca ");
    break;

  case "refrigerante":
    console.log("Você escolheu refrigerante ");
    break;

  case "combo":
    console.log("Você escolheu combo ");
    break;

  default:
    console.log("Opção inválida");
}