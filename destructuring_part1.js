//Conceito de Desestruturação

const frutas = ['maçã', 'banana', 'laranja'];

const [a, b,c,d = 'abacaxi'] = frutas;

console.log(a , b , c,d); // maçã

let coisas = [
                ['abacaxi', 'uva', 'pera'],
                ['Jose', 'Maria']
            ];
let [,[,n2]] = coisas;
let [[,,n3],[,n1]] = coisas;

console.log(n2); // Maria
console.log(n3,n1); // pera
