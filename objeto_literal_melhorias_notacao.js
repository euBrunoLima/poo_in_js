let nome = 'Bruno';
let idade = 30;
let sexo = 'Masculino';
let profissao = 'Desenvolvedor';

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou do sexo ${this.sexo} e trabalho como ${this.profissao}.`);
    }
}

console.log(objeto);
objeto.apresentar();


console.log('--- Melhoria na notação do objeto ---');

let objetoMelhorado = {
    nome,
    idade,
    sexo,
    profissao,
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou do sexo ${this.sexo} e trabalho como ${this.profissao}.`);
    }
}

console.log(objetoMelhorado);
objetoMelhorado.apresentar();