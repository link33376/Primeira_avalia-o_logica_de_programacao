const grupo = 6;
let aluno = "Pablo";

console.log("Meu nome eh " + aluno + " e eu sou do grupo "+ grupo);
console.log(`Grupo ${grupo} - Lider : ${aluno}`);

//Você só consegue acessar o sistema se digitar a senha correta E o usuário existir (COM SWITCH CASE).

const senhaCorreta = 1234;
let senhaDigitada = 1234;
let usuarioExiste= true;

switch (true){
    case (usuarioExiste && senhaDigitada === senhaCorreta):
    console.log ("Acesso aprovado!");
    break;
    default:
        console.log("Acesso negado!");
}

//Você só consegue acessar o sistema se digitar a senha correta OU o usuário existir.

if (usuarioExiste===true || senhaDigitada===senhaCorreta){
    console.log("Acesso Permitido!");
}
else{
    console.log("Acesso NAO Permitido!!");
}

//Você só consegue acessar o sistema se digitar a senha correta OU o usuário existir. (COM NOT)

if (!usuarioExiste || senhaDigitada !== senhaCorreta) {
    console.log("Acesso NEGADO!!!!");
} else {
    console.log("Acesso Permitido!!!!!");
}