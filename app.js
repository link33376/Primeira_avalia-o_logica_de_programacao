// Primeira_avalia-o_logica_de_programacao

/* Faça o fork do projeto no github cnone para sua máquina e crie o arquivo do projeto, todos os artefatos de código desenvolvidos terão que ser
entregues via pull request.*/

// 1 - uma variável e uma constante (1 ponto)
const motorista = "Rafael";
var Cnh = "validada" ;

// 2 - Concatene a var/const e adicione strings (1 ponto) 
console.log ("O Motorista " + motorista + " esta com a CNH " + Cnh);

// 3 - interpole a var const adicionando strings (1 ponto)
console.log (`O motorista em questão ${motorista} está com a documentação ${Cnh} `);

// 4 - Use os operadores lógicos AND OR NOT e as estruturas condicionais (3,5 ponto)

//AND 

let documentovalido = true;
let carro = true;

if (documentovalido && carro) {
    console.log("Você está habilitado a dirigir");
}else {
    console.log("Você NÃO está habilitado a dirigir")
}
//OR

let Documentovalido = true;
let Carro = false;

if (Documentovalido || Carro) {
    console.log("Você está habilitado a dirigir");
}else {
    console.log("Você NÃO está habilitado a dirigir")
}

//NOT

let DocumentoValido = true;
let CArro = true;

if (!(DocumentoValido || CArro)) {
    console.log("Você está habilitado a dirigir");
}else {
    console.log("Você NÃO está habilitado a dirigir")
}

// 5 - crie um switch e case para o desafio da equipe (3,5 ponto)

let documentodocarro = 3 

console.log(`O motorista ${motorista} so poderá dirigir se tiver um dos elementos válidos: placa em dia, documentação do motorista ou documentação do carro `);
switch (documentodocarro){
    case 1:
        console.log("possui a  placa em dia");
        break;
    case 2:
        console.log("possui documentação do motorista");
        break;
    case 3:
        console.log("possui documentação do carro");
        break;
    default:
        console.log("O motorista NÃO está Habilitado a dirigir");            
}



/* Equipe 4. Dirigir um carro
Analogia: Você só pode dirigir se estiver com a CNH válida E o carro estiver com documento em dia.*/

