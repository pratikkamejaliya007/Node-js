let id = 1;
let name = "hello";
let price = 12;

function helo() {
    return 4 + 6;
}

let obj = {
    id,
    name,
    price,
    cur:helo()
}

console.log(obj);
