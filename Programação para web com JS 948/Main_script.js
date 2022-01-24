function botao(){
    document.getElementById('agradecimento').innerHTML = "obrigado por clicar no botão";
    
}
function redirecionamento (){
   // window.open("https://web.dio.me/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d");
    window.location.href = "https://web.dio.me/course/programacao-para-internet-com-javascript/learning/ddb54ad6-55fb-4eec-90d5-561a6010d14d"

}

function trocar(elemento){
    // document.getElementById("mouse move").innerHTML = "obrigado por passar o mouse";
    elemento.innerHTML = "obrigado por passar o mouse ";

}

function voltar(elemento){
    // document.getElementById("mouse move").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

