function media(){
    let nome = window.prompt('Qual o nome do Aluno')
    let N1 = Number(window.prompt ('Digite a Nota 1'))
    let N2 = Number(window.prompt ('Digite a Nota 2'))
    let res = window.document.querySelector('div#resultado')
    let media = (N1+N2)/2
    res.innerHTML  = ` a média Final do Aluno  é  ${media}`
}