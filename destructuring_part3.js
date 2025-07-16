
let array = [20,67,90,13];

function teste([n1, n2, n3,n4, n5 = 0]){
    console.log(n1, n2, n3, n4, n5);
}

teste(array);

const obj = {
    a: 10,
    b: 20,
    c: 30
}

function teste2({a, b, c , d = 55}){
    console.log(a, b, c , d);
    console.log(a + b + c , d);
}

teste2(obj);