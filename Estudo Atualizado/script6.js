function avaliar(){
   
    let n1 = Number(window.prompt('Digite um numero'))
    let res = window.document.querySelector('section#resultado')
    res.innerHTML += `<p><strong> O numero a ser analisado é ${n1}</strong></P> <hr>`
        res.innerHTML += `<strong> O seu valor Absoluto é ${n1}</strong> <hr>`
            res.innerHTML += `<strong> A sua parte Inteira è ${n1}</strong> <hr>`
                res.innerHTML += `<strong> O valor Inteiro mais próximo é ${n1}</strong> <hr>`
                    res.innerHTML += `<strong> A sua raiz quadrada é ${Math.sqrt(n1)}</strong> <hr>`
                res.innerHTML += `<strong> A sua raiz cubica é ${math.cbrt(n1)}</strong> <hr>` 
            res.innerHTML += `<strong> O valor de ${n1} X ${n1} é igual á ${n1*n1} </strong> <hr>`
      res.innerHTML += `<strong> O valor de ${n1} X ${n1} X ${n1} é igual á ${n1*n1*n1}</strong> <hr>`  
    
    
}