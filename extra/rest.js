const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // { a: 1, b: 2, c: 3, d: 4 }


function sum(...number){
    return number.reduce((prev,curr)=> prev + curr,0)
}

console.log(sum(1,2,3,4,5))

function obj(...arr){
    return arr
}

console.log(obj(1,2,3,4,5,6,7,8))