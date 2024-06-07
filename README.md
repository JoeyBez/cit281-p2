# Project 2

Project 2 was about taking the expressions from Project 1, and refactoring them to support annonymous functions.
```ruby
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

//gets a radom letter from the alphabet
const getRandomLetter = function(){
    return alphabet[getRandomInteger(1, alphabet.length - 1)];
}

//generates a random string with random length
const getRandomString = function(minLength, maxLength){
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength + 1); i++) {
        result += getRandomLetter();
    }
    return result;
}
```
<a href="https://joeybez.github.io/joeybezner.github.io/">Back to Home</a>
