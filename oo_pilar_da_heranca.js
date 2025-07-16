class Animal{
    constructor(){
        this.cor = '';
        this.tamanho = '';
        this.peso = '';
    }
    dormir(){
        console.log("O animal está dormindo");
    }
}


// Animal var = new Animal();

class Cachorro extends Animal{
    constructor(){
        super(); // Chama o construtor da classe pai (Animal)
        this.orelhas = "Grandes";
    }

    correr() {
        console.log("O cachorro está correndo");   
    }
    rosnar() {
        console.log("O cachorro está rosnando");
    }
}

class Passaro extends Animal{
    constructor(){
        super(); // Chama o construtor da classe pai (Animal)
        this.bico = "Curto";
    }

    voar(){
        console.log("O pássaro está voando");
    }
}

class Papagaio extends Passaro{
    constructor(){
        super();
        this.bico = 'longo';
        this.sabeFalar = true;
    }

    falar(){
        console.log("O papagaio está falando");
    }

}

let cachorro1 = new Cachorro();
cachorro1.dormir(); // O cachorro está correndo
let passaro1 = new Passaro();
passaro1.dormir();

console.log("===== Papagaio =====");
let papagaio1 = new Papagaio();
papagaio1.dormir(); 
papagaio1.falar();
papagaio1.voar();

console.log(papagaio1)
