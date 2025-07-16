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

class Avestruz extends Passaro{
    constructor(){
        super('curto', 'preto e branco', 'grande', 'pesado'); // Avestruz herda de Passaro
       

    }

    enterrarCabeca(){
        console.log("O avestruz está enterrando a cabeça na areia");
    }
    // Sobrescrevendo o método voar da classe Passaro
    voar(){
        console.log("O avestruz não pode voar");
    }
}

// let papagaio1 = new Papagaio(true, 'longo', 'amarelo e vermelho', 'pequeno', 'leve' );
// console.log(papagaio1);
// papagaio1.dormir();
// papagaio1.falar();
// papagaio1.voar();

let avestruz1 = new Avestruz();
avestruz1.enterrarCabeca();
avestruz1.voar(); // Avestruz não pode voar, mas herda o método voar da classe Passaro


