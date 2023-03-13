var disciplina = "Fundamentos de programação";//DECLARAÇÃO DE VARIAVEL GLOBAL
var disciplina = "Programação Web";//REDECLARAÇÃO MODIFICANDO O VALOR

function modificaDisciplina(){
    disciplina = "Lógica de programação";//REATRIBUIÇÃO DA VARIAVEL GLOBAL DISCIPLINA
}
modificaDisciplina();//CHAMA A FUNCÃO
if(true){
    disciplina = "Programação Web!";
}

var i = 0;
while(i<5){
    disciplina = "Sistemas Operacionais!";
    i++;
    
}

{//BLOCO
 disciplina = "Gestão de Tempo";
}
console.log("Escopo de função do tipo var");
function media(n1,n2){
    var med = (n1+n2)/2;//ESCOPO DE FUNÇÃO
    console.log(med)
    
}
media(10,50)
// console.log(med) - acesso negado
var escola = "Lucas Emanuel";
console.log(escola);
var escola = "Amelia Figueiredo";//redeclaração de variavel
console.log(escola);

console.log("-----Escopo do tipo LET-----");
let professor = "João Victor"
function modProf(){
    professor = "Rivanio";
}
modProf();
if(true){
    professor = "Chico"
}
function quadrado(valor){
    let quad = valor * valor;
    console.log(quad)// acesso ok
}
quadrado(5)
// console.log(quad) - acesso negado
{
    let curso = "Administração";
}
// console.log(curso)
if(true){
    let salario = 1950;
    console.log(salario);
}
