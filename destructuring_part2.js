let produto = {
    descricao: "Notebook",
    preco: 2500,
    detalhes: {
        fabricante: "Dell",
        modelo: "Inspiron",
    }
}

// let {descricao, preco} = produto;
// let {descricao: d, preco: p} = produto;
// let {descricao: d, preco: p, desconto = '200 reais'} = produto;
let {detalhes: {fabricante, modelo}} = produto;

console.log(`fabricante: ${fabricante}, modelo: ${modelo}`);    