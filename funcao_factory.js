let bicicleta = {
    cor: 'azul',
    marcha: 'unica',
    aro: 26,
    pedalar(){
        console.log("A bicicleta está pedalando");
    }
}

console.log(bicicleta);
bicicleta.pedalar(); // A bicicleta está pedalando

let bicicletaFactory = function(cor, marcha, aro){
    //logica
    //requisição http
    //resposta http
    return {
        cor: cor,
        marcha: marcha,
        aro: aro,
        pedalar() {
            console.log("A bicicleta está pedalando");
        }
    }
}

let bicicleta1 = bicicletaFactory('vermelha', '18', 29);
let bicicleta2 = bicicletaFactory('preta', '21', 24); 
console.log(bicicleta1);
bicicleta1.pedalar(); // A bicicleta está pedalando
console.log(bicicleta2);
bicicleta2.pedalar(); // A bicicleta está pedalando