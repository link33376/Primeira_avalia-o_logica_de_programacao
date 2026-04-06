const nome = "Daniel";
let Saldo = 1000;
let ValorCompra = 500;
let SaldoCartao = true;
let temEndereco = true;

console.log("Oi, " + nome + ". Seu saldo atual é R$" + Saldo + ".");
console.log("Valor da compra: R$" + ValorCompra + ".");

//AND 
console.log("AND");
if (SaldoCartao && Saldo >= ValorCompra && temEndereco){
    console.log("Compra realizada!");
} else{
    console.log("Algo deu errado. Verifique seu saldo ou endereço.");
}

//OR
console.log(`OR`)
if (Saldo < ValorCompra || !temEndereco) {
    console.log("Saldo insuficiente ou endereço não cadastrado.");
} else {
    console.log("compra pode ser efetivada");
}

// NOT; vefifica, se tem endereço
console.log("NOT");
if (!temEndereco) {
    console.log("Aviso: O campo de endereço está vazio!");
} else {
    console.log("Endereço verificado!");
}

console.log(`Obrigado pela preferênia, ${nome}! Agora você tem R$${Saldo - ValorCompra} restantes.
    `);


console.log("Switch case");
let bateriacelular = 100;
switch (true) { //o true faz comparar qual desses casos é verdadeiro, e executa o código correspondente
    case (bateriacelular >= 80 && bateriacelular <= 100):
        console.log("O celular está com uma boa carga");
        break;
    
    case (bateriacelular > 40 && bateriacelular < 80):
        console.log("O celular está com uma carga média");
        break; 

    case (bateriacelular > 0 && bateriacelular <= 40):
        console.log("O celular está com uma carga baixa");
        break;

    default:
        console.log("Carga inválida ou bateria zerada!");
        break;
}

/*Equipe 3:
David Santos
Gabriel Ramos Ferreira
Karla Santos
Railson Uchoa*/ 