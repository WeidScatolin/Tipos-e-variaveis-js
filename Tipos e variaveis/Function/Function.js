function fn() {
    return 'code here';
}
const arrowFn = () => 'code here';
const arrowFn = () => {
    //mais de uma expressão
    return 'code here ';
}
// fuçoes tambem ão objetos
fn.prop =  'posso criar propriedades';
console.log(fn());
console.log(fn.prop);


// receber parametros

const logValue = value => console.log(value);
const logFnResult = fnparam => console.log(fnparam);

logFnResult(fn);

//Receber e retornar funçoes

const controlFnExec = fnparam => allowed =>{
    if (allowed){
        fnparam();

    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // vai executar a função
handleFnExecution ();     // não vai executar a função


//control fn exec como função

function ControlFnExec(fnparam);{
    return function(allowed){
        if(allowed){
            fnparam();
        }
    }
}