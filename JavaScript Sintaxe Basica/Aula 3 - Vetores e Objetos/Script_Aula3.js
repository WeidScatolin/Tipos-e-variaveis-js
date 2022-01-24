// o que são vetores ou arrays

/// Vetores ou matrizes são listas onde cada variavel possui um indice e os valores podem ser de vários tipos

//como declarar um array
/* let array =  ['string',1,true];
console.log(array); */

//Array pode guardar vários tipos de dados
//let array = ['string',1,true ,['array1'],['array2'],['array3'],['array4']];
// console.log(array[3]);

/*
Foreach 
array.forEach(function(item,index) {console.log(item,index)});
*/
/*
array.push adiciona um novo item na sua array

array.push(1);
console.log(array);*/

/* array.pop remove um item do final da sua array
array.pop();
console.log(array); */
/*
array.shift remove o primeiro item da sua array
array.shift();
console.log(array); */

/*
array.unshift adiciona um novo item no inicio da sua array, no indice 0

array.unshift('novo_item_no_inicio');
console.log(array);*/

/* 
array.indexof procura o indice de um item da sua array
console.log(array.indexOf(true));*/

/*
splice remove ou substitui um item pelo indice
array.splice(0,3);
console.log(array);*/

/*slice retorna  uma parte de um array existente 

let arrayNovo = array.slice(0,3);
console.log(arrayNovo);*/


//// Objetos 
let object = {string: 'string',Number: 1,Boolean: true, array:['array'],objectInterno:{objectInterno:'objeto interno'}};
console.log(object);

var string = object.string;
console.log(string);

var array = object.array;
console.log(array);

var {string,array,Boolean} = object;
console.log(string,array,Boolean);





