const nome = "bolo";
var sabor = "chocolate";

console.log(nome + " sabor " + sabor);

console.log(`${nome} sabor ${sabor}`)

//AND
let MassaPronta = true;
let FornoPreAquecido = true;

if(MassaPronta && FornoPreAquecido){
    console.log("Bolo no Forno");
}else{
    console.log("Não é Possível Assar o Bolo")
}

//OR
let massapronta = false;
let fornopreaquecido = true;

if(massapronta || fornopreaquecido){
    console.log("bolo no forno");
}else{
    console.log("não é possível assar o bolo");
}

//NOT
let MASSAPRONTA = false;
let FORNOPREAQUECIDO = false;

if(!MASSAPRONTA || FORNOPREAQUECIDO){
    console.log("BOLO NO FORNO");
}else{
    console.log("NÃO É POSSÍVEL ASSAR O BOLO");
}

let bolo = "laranja";

switch (bolo){
    case "chocolate":
        console.log("Você escolheu bolo de chocolate");
        break;

        case "morango":
            console.log("Você escolheu bolo de morango");
            break;

            case "baunilha":
                console.log("Você escolheu bolo de baunilha");
                break;

                case "cenoura":
                    console.log("Você escolheu bolo de cenoura");
                    break;

                    default:
                        console.log("Sabor não disponivel");

}