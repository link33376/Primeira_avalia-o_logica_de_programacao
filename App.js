//Primeira_avalia-o_logica_de_programacao
/* Equipe 7. Jogar um videogame online
Analogia: Você só entra na partida se tiver internet funcionando E estiver logado na sua conta.*/

/* Faça o fork do projeto no github cnone para sua máquina e crie o arquivo do projeto, todos os artefatos de código desenvolvidos terão que ser
entregues via pull request.*/

// 1 - uma variável e uma constante (1 ponto)
const nome = "João";
var idade = 24;

// 2 - Concatene a var/const e adicione srings (1 ponto) 
console.log("Olá, " + nome + "! Você tem " + idade + " anos.");

// 3 - interpole a var const adicionando strings (1 ponto)
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// 4 - Use os operadores lógicos AND OR NOT e as estruturas condicionais (3,5 ponto)

//AND 
let internetFuncionando1 = true;
let logadoNaConta1 = true;
if (internetFuncionando1 && logadoNaConta1) {
  console.log("Você pode entrar na partida!");
}else {
  console.log("Você não pode entrar na partida!");
}

//OR
let internetFuncionando2 = true;
let logadoNaConta2 = false;
if (internetFuncionando2 || logadoNaConta2) {
  console.log("Você pode entrar na partida!");
} else {
  console.log("Você não pode entrar na partida!");
}

//NOT
let internetFuncionando3 = false;
let logadoNaConta3 = false;
if (!internetFuncionando3 && !logadoNaConta3) {
  console.log("Você não pode entrar na partida!");
}else {
  console.log("Você pode entrar na partida!");
}

// 5 - crie um switch e case para o desafio da equipe (3,5 ponto)

    let statusServidor = "online";
switch (statusServidor) {
  case "online":
    console.log("O servidor está online. Você pode entrar na partida!"); 
    break;
  case "offline":
    console.log("O servidor está offline. Você não pode entrar na partida!"); 
    break;
    case "manutenção":
    console.log("O servidor está em manutenção. Você não pode entrar na partida!"); 
    break;
    default:
    console.log("Status do servidor desconhecido. Verifique novamente mais tarde!");
    break;
}
