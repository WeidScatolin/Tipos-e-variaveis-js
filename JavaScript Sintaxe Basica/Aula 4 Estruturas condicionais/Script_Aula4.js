// var jogador1 = 0;
// var jogador2 = 2;
// var placar;


// // if ternário
// jogador1 !== -1 && jogador2 !== -1 ? console.log('os jogadores são validos'):
// console.log('jogadores inválidos');
// if (jogador1,jogador2 ==-1){
//     console.log('ambos os jogadores são invalidos,portanto Não podemos iniciar o jogo.')
// }

// //usando IF
// if (jogador1  > 0  && jogador2 == 0 ) { 
//     console.log('Jogador 1 marcou ponto!');
//     placar = jogador1 > jogador2;
//  }
 
//  //Usando Else IF
//  else if (jogador2 > 0 && jogador1 == 0 ){
//     console.log('Jogador 2 marcou ponto')
//     placar = jogador2 > jogador1;
// }
// //Usando Else 
// else {
//     console.log('Ninguém marcou ponto algum');

// }

// switch (placar) {
//     case placar = jogador1 > jogador2:
//     console.log( 'jogador 1 ganhou')
//     break;
    

//     case placar = jogador2> jogador1:
//         console.log('jogador  ganhou')
//         break;


//     default:
//         console.log('O jogo empatou!!')
//         break;
// }


let array = ['valor1','valor2','valor3','valor4','valor5'];
let object = {propriedade1:'valor1',Propriedade2: 'valor2',Propriedade3: 'valor3',}

// for executa uma instrução até que ela seja falsa
 for (let indice = 0 ; indice < array.length; indice++) {   
     console.log(indice);

 }

// 11:58

// for(i in array) {
//     console.log(i);
// }

// //for com object

// for (i in object){
//     console.log(i);

// }

// for (i of array) {
//     console.log(i);
// }

// For of com objeto é bem restrito, portanto quase nunca usamos.
// for (i of object.propriedade1) {
//     console.log(i)
// }


var a = 0;

// while ( a < 10){
//     a++;
//     console.log(a);
// }

do {
    a++;
    console.log(a)

 } while(a < 8);
