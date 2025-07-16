let a1 = {
    cor: 'Branco',
    modelo: 'Airbus a320',
    levantarVoo: () => console.log("Avião levantou voo")
}

a1.levantarVoo(); // Avião levantou voo

let aviaoF = function(){
    this.cor = 'azul',
    this.modelo = 'Airbus a320',
    this.levantarVoo = () => console.log("Avião levantou voo")

}
let a2 = new aviaoF();

class AviaoC{
    constructor(cor, modelo){
        this.cor = cor;
        this.modelo = modelo;
    }

    levantarVoo() {
        console.log("Avião levantou voo");
    }
}

let a3 = new AviaoC('vermelho', 'Boeing 737');

console.log(a1);
console.log(a2);
console.log(a3);
a3.levantarVoo(); // Avião levantou voo