let arr = [10, 20, 30, 40, 50];

let [a, ...rest] = arr;
console.log(a); // 10
console.log(rest); // [20, 30, 40, 50]

rest.forEach((item, index, array) => {
    array[index] = item * 2;
});
console.log(rest); // [40, 60, 80, 100]

let obj = {
    a: 10,
    b: 20,
    c: 30,
}

let { a: first, ...others} = obj;
console.log(first); // 10
console.log(others); // { b: 20, c: 30 }