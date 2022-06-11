let idade = 18
let condicaoHumana = true //Luan, o que seria isso? Condição humana? É pra afirmar se é humano ou animal? rs
let janeiro = true
let dezembro = true
const nome = "Adriana"
let primeiraLetraDoNome = "A" 
const sobrenome = "Gutierrez"
let qtdLetrasSobrenome = 9

//Crie uma condição que exiba uma mensagem no console "se sua idade for maior que 18".
if (idade >= 18)
    console.log (nome + " é maior de idade!")

//Crie uma condição que exiba uma mensagem no console "se você for maior de idade" E "se a condição humana for true".
if ((idade >= 18) && (condicaoHumana === true)) 
    console.log (nome + " é uma humana maior de idade!")

//Criar uma condição que exiba uma mensagem no console "se você fizer aniversário em Janeiro OU Dezembro".
if ((janeiro === true) || (dezembro === true))
    console.log ("Feliz Aniversário!")

//Crie uma condição que exiba uma mensagem no console "se seu nome começar com a letra R".
if (primeiraLetraDoNome === "R") //Luan, meu nome começa com A, então eu entendi que NÃO é pra aparecer no console, certo?
    console.log (nome + ", seu nome começa a letra A.")

//Crie uma condição que exiba uma mensagem no console "se seu sobrenome tiver mais de 6 letras" 
//OU "se seu nome começar com a letra E".
if ((qtdLetrasSobrenome >= 6) || (primeiraLetraDoNome === E)) // Luan, como um deles é True, então ele aparece no console, certo?
    console.log(nome + ", seu sobrenome tem mais de 6 letras, porém seu nome começa com a letra A")