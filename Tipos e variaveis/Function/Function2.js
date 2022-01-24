this.name = 'nome do contexto de criação';
const getNameArrowFn = () => this.name;
function getname (){
    return this.name;


}

const user  = {
    name:'nome no objeto de execução',
    getNameArrowFn,
    getname
}

console.log(user.getNameArrowFn());

console.log(user.getname());
