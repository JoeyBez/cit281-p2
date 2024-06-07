const sum = (a, b, c = 0) => {
    return a + b + c;
}

module.exports = {
    sum
};

let arrowFunc = [1,2].map((num) => num * 2);
console.log(arrowFunc);

/*
function add(a, b){
    return a + b;
}
*/

const add = (a, b) => a + b;
console.log(add(1, 2));

const word = "abcdef";
for(const letter of word){
    console.log(letter);
}

function gather(...args){
    for(let p of args){
        console.log(p);
    }
}

gather(1, 2, "a");

const point = {x: 10, y: 20, z: 30};
const {z, ...xy} = point;
console.log(z, xy);

const colors = ["red", "white", "blue"];
const numbers = [1, 2, 3];
const mixed = [...colors, ...numbers];


const a = ['a', 'b', 'c'];

function firstLetterUppercase(a){
    /*
    let result = [];

    for(let i = 0; i < a.length; i++){
        result[i] = a[i].toUpperCase();
    }
    */
    return a.map((letter) => letter.toUpperCase());
}
