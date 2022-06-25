const nome = "Adriana"
console.log (nome.length) //7 letras

//Crie uma condição que exiba uma mensagem no console "se sua idade for maior que 18".
let idade = 42
if (idade >= 18){
    console.log ("Você é maior de idade!")
}else{
    console.log("Você é menor de idade")
}

//Crie uma condição que exiba uma mensagem no console "se você for maior de idade" E "se a condição humana for true".
let condicaoHumana = false
if ((idade >= 18) && (condicaoHumana === true)){
    console.log ("Você é um humano maior de idade!")
}else{
    console.log ("Você é um robô!")
}

//Criar uma condição que exiba uma mensagem no console "se você fizer aniversário em Janeiro OU Dezembro".
let janeiro = true
let dezembro = true
let mes = "julho"
if ((mes === janeiro) || (mes === dezembro)){
    console.log ("Feliz Aniversário!")
}else{
    console.log("Você não vai ganhar presente!")
}
    

//Crie uma condição que exiba uma mensagem no console "se seu nome começar com a letra R".
if (nome[0] === "R"){
    console.log ("Seu nome começa com a letra R");
}else{
    console.log(`Seu nome começa com a letra ${nome[0]}`);
    // ou console.log("Seu nome começa com " + nome[0]);
    // console.log(`Seu nome termina com a letra ${nome[nome.length - 1]}`);
}
    
//Crie uma condição que exiba uma mensagem no console "se seu sobrenome tiver mais de 6 letras" 
//OU "se seu nome começar com a letra E".
const sobrenome = "Gutierrez"
if ((sobrenome.length > 6) || (nome[0] === E)){
    console.log(sobrenome + ", seu sobrenome tem mais de 6 letras");
}else{
    console.log(nome + "Seu nome começa com a letra A")
}
