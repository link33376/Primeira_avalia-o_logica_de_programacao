//1 - variavel e uma constante
let nome = "cleber";
const idade = 18;

// 2 - Concatena var/const e adiciona srings

let texto = "ola," + "mundo";

console.log(texto);

// 3 - interpole a var const adicionando strings

let identidade = "matheus";
const maiorDeIdade = 18

console.log("meu nome e:" + identidade);
console.log("minha idade e:" + maiorDeIdade);

// 4 - Use os operadores lógicos AND OR NOT e as estruturas condicionais

//AND

let cartao = true;
let saldoSuficiente = true;

if( cartao && saldoSuficiente) {
    console.log("saque liberado");
}   else {
    console.log("saque negado");
}

//OR

let cartao2 = false;
let saldoSuficiente2 = false;

if(cartao2 || saldoSuficiente2) {
    console.log("saque liberado");
}   else {
    console.log("saque negado");
}

 //NOT

 let cartao3 = false
 let saldoSuficiente3 = true

 if ( !cartao3) {
    console.log("saque liberado");
 }  else {
    console.log("saque negado");
 }

 // 5 - crie um switch e case para o desafio da equipe

 let banco = 5
 let saldo = 300
let cartao4 = true

if (saldo >= 200 && cartao4) {
    console.log("saque liberado");
}  else {
    console.log("saque negado");
}

switch(banco) {
    case 1:
        console.log("solicitar saque");
         break;
    case 2:
        console.log(`ver saldo disponivel: ${saldo}`);
        break;
    case 3:
        console.log("sair do banco");
        break;
        default:
            console.log("opção invalida");
}
