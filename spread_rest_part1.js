
let nomeCompleto = "Bruno Lima Beserra";
const nomeCompletoArray = [...nomeCompleto];
console.log(...nomeCompleto);
console.log(nomeCompletoArray);



const alunosReprovados = ['João', 'Maria', 'Pedro'];
const alunosAprovados = ['Ana', 'Luiz', 'Carlos'];

const alunos = [...alunosReprovados, ...alunosAprovados];

console.log(`Alunos Reprovados: ${alunosReprovados}`);
console.log(`Alunos Aprovados: ${alunosAprovados}`);
console.log(`Todos os Alunos: ${alunos}`);


//Operador Spread com Objetos
const pessoa = {
    nome: 'Bruno',
    idade: 30
};
const endereco = {
    rua: 'Rua A',
    cidade: 'São Paulo'
};
const pessoaCompleta = {...pessoa, ...endereco, rua: 'Rua B' };

console.log();

console.log(`pessoa: ${JSON.stringify(pessoa)}\n`);
console.log(`endereço: ${JSON.stringify(endereco)}\n`);
console.log("pessoa completa:");
console.log(pessoaCompleta);
