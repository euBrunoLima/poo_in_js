let pessoa = {
    nome: 'Maria',
    idade: 25,
    sexo: 'Feminino',
}
pessoa.profissao = 'Engenheira';
pessoa.apresentar = () => console.log(`Olá, meu nome é: ${pessoa.nome}`)
console.log(pessoa);
pessoa.apresentar();
