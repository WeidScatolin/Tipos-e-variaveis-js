 // tipos primitivos

 ///Boolean

// var VouF = false;
// console.log(typeof(VouF));

/// number

// var Numeroqualquer = 1;
// //Console_log mostra no console do site html 


// console.log(typeof(Numeroqualquer));

 ///string

// var Nome = 'weid';
// console.log(typeof(Nome))


//Declaração de variaveis

 var variavel; 
 variavel = 'weid'
 console.log (variavel);

///////////////////////////

 let variavel2 = 'diana';
 // pode editar let e var depois de sua criação
 variavel2 = 'weid'
 console.log(variavel2);
 /////////////////////////
// Const Não pode ser editada após sua declaração

 const constante = 'weid';
 console.log(constante);
////////////////////////////

// Escopo global//Local

//Escopo global, Variavel declarada fora de qualquer função 


 var EscopoGlobal = 'global';
console.log(EscopoGlobal)

///Escopo Local com let em uma função /resolve-se o erro chamando a função fora do escopo local e jogando o console dentro da function
function EscopoLocal   () {
    let EscopoLocalInterno;
    console.log(EscopoLocalInterno);
 }
 EscopoLocal();
 ///////////////////////////////

//Atribuição

//  Sinal de = significa Atribuição
 var atribuição = 'weid';
 console.log(atribuição);
 
 //////////////////////////
 //comparação em JS == e na comparação sempre retorna ou valor Boolean V ou F
 var Comparação = '0' == 0;
 console.log( Comparação) ;
///////////////////////////

// Comparação de valores e tipos JS usam-se 3 sinais de ===
 
 var comparaçãoidentica = '0' === 0;
 console.log(comparaçãoidentica);
 //////////////////////////////// 

//operadores aritmeticos 

 //Adição +
var adicao = 1+1;
console.log(adicao)

//Subtração -
var subtracao = 2-1;
console.log(subtracao);

// Multiplicação  *
var multiplicacao = 2*5;
console.log(multiplicacao);

// Divisão Real /
var divisaoreal = 10/2;
console.log(divisaoreal);
 //Divisão colocando o valor final da divisão % significa valor final da divisão// o resto.

 var DivisaoInteira = 5 % 2;
 console.log(DivisaoInteira);

// Potenciação **
var  potenciação = 2 ** 10; 
console.log(potenciação);

//////////////////////////////////////////

// Operadores relacionais 
 
// > MaiorQue
var MaiorQue = 5 > 2 ;
console.log(MaiorQue);



//< MenorQue
var MenorQue = 5 < 2;
console.log(MenorQue);


//Maior ou igual a  >=

var maiorOuIgual = 5 >= 2 ;
console.log(maiorOuIgual);



//Menor ou igual <=
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

///////////////////////////////

//Operadores Logicos

// && todos os valores precisam ser verdadeiros, caso não seja, tudo é false

var e = true && false;
console.log(e);


// || se tivermos um valor verdadeiro,  tudo será true

var ou = true || false;
console.log(ou);


// ! Inverte o valor true to false ou False to true

var nao = !true;
console.log(nao);





