//contexto Rest

function soma(...numeros){
    let resultado = 0
    numeros.forEach(n => {
        resultado += n
    })
    return resultado
}

function multiplica(m, ...numeros){
    console.log(m, '\n', numeros)
    let resultado = 0;
    numeros.forEach(n => resultado += m * n)
    console.log(resultado)
}

console.log(soma(1, 2, 3, 4, 5)) // 15
multiplica(5, 7,12,3,49)