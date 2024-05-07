// index.js - purpose and description here
// Author: Giselle Torres
// Date: April 28, 2024

//named array
let numbers = [5, 10, 15, 20, 25];
console.log("My Array: ", numbers);

//named function that will return result
function numbersFunc(x){
    let results = (x*5)
    return results;
}

//map that will callback numbers from array
let mappedNumbers = numbers.map(numbersFunc);
console.log("Mapped Numbers: " , mappedNumbers);

//variable to results to print it out
let mapResults = numbers.map(function(x){
    let results = (x+5);
    return results;
});

//print out results onto console
console.log("Results: ", mapResults);