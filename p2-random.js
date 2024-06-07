/*
    CIT 281 Project 2
    Name: Joey Bezner
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
  
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}

console.log(getRandomString(10, 20));

//gets a radom letter from the alphabet
function getRandomLetter(){
    return alphabet[getRandomInteger(1, alphabet.length - 1)];
}

//generates a random string with random length
function getRandomString(minLength, maxLength){
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength + 1); i++) {
        result += getRandomLetter();
    }
    return result;
}

//sorts a given string in alphabetical order
function getSortedString(string){
    return string.sort();
}
