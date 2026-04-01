

/* Faça o fork do projeto no github cnone para sua máquina e crie o arquivo do projeto, todos os artefatos de código desenvolvidos terão que ser
entregues via pull request.*/

// 1 - uma variável e uma constante (1 ponto)

// 2 - Concatene a var/const e adicione srings (1 ponto) 

// 3 - interpole a var const adicionando strings (1 ponto)

// 4 - Use os operadores lógicos AND OR NOT e as estruturas condicionais (3,5 ponto)

// 5 - crie um switch e case para o desafio da equipe (3,5 ponto)



// 1
const saudacao = "Olá "; 
var nome = "Rodrigo";
console.log( saudacao + "Sr " + nome + " tenha um bom dia!");

console.log(`${saudacao} Sr ${nome} tenha um bom dia!`);





/* Equipe 4. Dirigir um carro Analogia: Você só pode dirigir se estiver com a CNH válida E o carro estiver com documento em dia.*/

//AND 
let CNHvalida = true;
let CarroEmDia = true;
if(CNHvalida && CarroEmDia){
    console.log("você pode dirigir");
}else{
    console.log("você não pode dirigir");
}
//OR
let cnhVALIDA = true;
let carroEmDia = false;
if(cnhVALIDA || carroEmDia){
    console.log("Você pode Dirigir");
}else{
    console.log("Você não pode dirigir");
}

//NOT
let cnhValida  = false;
let CarroemDia = false;
if(!cnhValida || CarroemDia){
    console.log("VOCÊ PODE DIGIRIR");
}else{
    console.log("VOCÊ NÃO PODE DIRIGIR")
}


//5 switch
let nota = 2;

switch(nota){
    case 1:
        console.log("Rodrigo nota:10");
        break;
    case 2:
    console.log("Blenda nota:10");
    break;
    case 3:
        console.log("Gean nota:10");
        break;
        default:
            console.log("aluno não encontrado");
}

//Equipe 4: Rodrigo Campos. Blenda Kettlen e Gean Carlos.