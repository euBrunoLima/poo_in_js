class Produto{
    constructor(descricao, preco){
        this.descricao = descricao;
        this.preco = preco;
    }

    verDescricao(){
        console.log(`${this.descricao} por apenas R$ ${this.preco.toFixed(2)}`);
    }
}

let produto1 = new Produto('Caneta Bic', 2.50);
console.log(produto1);
produto1.verDescricao();


const ProdutoLiteral = {
    descricao: 'Caneta Leo & Leo',
    preco: 3.00,
    verDescricao: function(){
        console.log(`${this.descricao} por apenas R$ ${this.preco.toFixed(2)}`);
    }
}

console.log(ProdutoLiteral);
ProdutoLiteral.verDescricao();