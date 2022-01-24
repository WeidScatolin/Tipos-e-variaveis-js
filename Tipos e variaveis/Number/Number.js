const myNumber = 12.3698
/// Transformar numero em uma string 
 const numberAsString = myNumber.toString();
 console.log('numeron transformado em string : ' , numberAsString, typeof numberAsString);

 //Retorna o numero com casas decimais

 const fixedTwoDecimals = myNumber.toFixed(2);
 console.log('\nNumero com duas casas decimais:',  fixedTwoDecimals);



 //Transforma uma string em float

 console.log('\nString parseada para float:', parseFloat('13,22'));

 //transforma uma string em int
 console.log('\n String parseada para Int:' , parseInt(13.20));


 