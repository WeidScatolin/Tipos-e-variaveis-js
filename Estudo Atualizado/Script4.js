function Somar(){
    let  n1 =  window.prompt('Digite um numero')
    let  n2 =  window.prompt('Digite o outro numero')
    let resultado = n1*n2 
    let res = document.querySelector('div#resultado')
   res.innerHTML = `<strong>O resultado da multiplicação  entre ${n1} e ${n2} é ${resultado} </strong>`
 


}