class Animal{
    constructor(cor, tamanho, peso){
        this.cor = cor;
        this.tamanho = tamanho; 
        this.peso = peso;
    }
    dormir(){
        console.log("O animal está dormindo");
    }
}




class Cachorro extends Animal{
    constructor(orelhas, cor, tamanho, peso){
        super(cor, tamanho, peso); // Chama o construtor da classe pai (Animal)
        this.orelhas = orelhas;
    }

    correr() {
        console.log("O cachorro está correndo");   
    }
    rosnar() {
        console.log("O cachorro está rosnando");
    }
}

class Passaro extends Animal{
    constructor(bico, cor, tamanho, peso){
        super(cor,tamanho,peso); // Chama o construtor da classe pai (Animal)
        this.bico = bico;
    }

    
    voar(){
        console.log("O pássaro está voando");
    }
}

class Papagaio extends Passaro{
    constructor(sabeFalar, bico, cor, tamanho, peso){
        super(bico, cor, tamanho, peso);
        this.sabeFalar = sabeFalar;
    }

    falar(){
        console.log("O papagaio está falando");
    }

}

let papagaio1 = new Papagaio(true, 'longo', 'amarelo e vermelho', 'pequeno', 'leve' );
console.log(papagaio1);
papagaio1.dormir();
papagaio1.falar();
papagaio1.voar();


