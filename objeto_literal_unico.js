let assinatura ={
    idCliente: 123456,
    descricao: 'Assinatura mensal',
    valor: 29.90,
    status: 'Ativo',
}

console.log(assinatura);

let y = assinatura;
y.status = 'Inativo'
y.descricao = 'Assinatura anual';
console.log(assinatura);