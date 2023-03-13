// var num = window.prompt("Digite um número");
// //com o window.prompt realiza a entrada de dados do usuário, salvando-os como string
// num = parseInt(num);
// //metodo parseInt realiza a conversao do dado indicado para o tipo inteiro
// var num2 = window.prompt("Digite um número");
// num2 = parseInt(num2);
// //console.log(num+num2), antes de fazer a conversao, ficara o resultado nao seria uma soma, mas sim uma concatenacao, mostrando 11
// //metodo typeOf() mostra o tipo do dado que foi inserido para o mesmo
// //console.log(typeof(soma)), o usuario pode verificar a partir do console
// var soma = num+num2
// //realizado as devidas conversoes, agora a soma sera realizada corretamente, salvando em soma o valor 2
// console.log(soma);
//com o typeOf() podemos perceber a modificao, onde agora indica 'number'
console.log("Tipos inteiro e ponto flutuante são number no JS");
let valorInt = 25;
let valorFloat = 25.5
console.log(typeof(valorInt));
console.log(typeof(valorFloat));
//ambos sao apresentados como number
console.log(parseInt(valorFloat));
//mostra somente a parte inteira do numero ponto flutuante
console.log("-----------------------------------------");
console.log("Tipos String");
var string1 = "";
console.log(typeof(string1))
var string2 = "125";
console.log(typeof(string2))
var string3 = "Amélia";
console.log(typeof(string3))
//ambos serao do tipo string
console.log("-----------------------------------------");
console.log("Tipo Boolean(lógico)");
var bool0 = false;
var bool1 = true;
console.log(typeof(bool1))
//strings e numbers podem indicam um valor logico, ou seja, true ou false
console.log(!!string1);//onde há uma string vazia, o valor logico percebido com o !! é false
console.log(!!string2);//quando a string não está vazia o valor logico é true
valorInt = 0;
console.log(!!valorInt);//quando um number é igual a zero, o valor logico é false, deferentemente do numero 1 por exemplo

var bol = true;
console.log(Boolean(bol));
if(bol == true){
    console.log("execute os comandos!");
}else{
    console.log("execute os comandos do else!")
}