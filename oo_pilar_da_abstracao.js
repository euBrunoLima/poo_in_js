class Sofa {

    constructor(qtd_lugar, cor, reclinado){
        this.qtd_lugar = qtd_lugar;
        this.cor = cor;
        this.reclinado = reclinado;
    }

    reclinar(){
        if(this.reclinado == true){
            console.log("Sofá é reclinado")
        }else{
            this.reclinado = true,
            console.log("Sofá não é reclinado")
        }
    }

    exibirSofa(){
        console.log(`Sofá de ${this.qtd_lugar} lugares, cor ${this.cor}, reclinado: ${this.reclinado}`)
    }


}

let sofa1 = new Sofa(3, "azul", false);
let sofa2 = new Sofa(2, "vermelho", true);


var lista = [
    [ 3, "azul", false],
    [ 2, "vermelho", true],
    [ 4, "verde", false],
    [ 5, "preto", true],
    [ 3, "branco", false],
]

const Pessoa = [

   {
        nome: "Lucas",
        idade: 30,
        altura: 1.80,
        peso: 80,
        cor: "branco",
        sexo: "masculino",
        cabelo: "castanho",
        olhos: "castanho",
        nacionalidade: "brasileiro",
        cidade: "São Paulo"
   },

    {
        nome: "Maria",
        idade: 25,
        altura: 1.65,
        peso: 60,
    }

]

const pessoa1 = {
    nome: "Bruno",
    idade: 28,
    altura: 1.75,

}

Pessoa.forEach((item) =>{
    console.log(`Nome: ${item.nome}, Idade: ${item.idade}, Altura: ${item.altura}, Peso: ${item.peso}`)
})

Object.keys(pessoa1).forEach(([key]) =>{
    console.log(`${key}: ${Pessoa[key]}`)
})

Object.entries(pessoa1).forEach((valor,key)=>{
    console.log(`${key}: ${valor}`)
})


// var listaSofa = [],


// lista.forEach((item) =>{
//     const [qtd_lugar, cor, reclinado] = item,
//     let sofa = new Sofa(qtd_lugar, cor, reclinado),
//     listaSofa.push(sofa),
// })

// console.log(listaSofa),




// console.log(sofa1),
// console.log(sofa1.reclinar()),





