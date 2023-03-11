'use strict'; 

function getMyName (name) {
    console.log(name);
}

getMyName ('Stas'); 

//========================
let result;

function getSum (n) {
    if (n > 0 && n <= 100) {
        return result = (n * (n + 1)) / 2; 
    } else {
        return console.log ('Введите корректное значени');
    }
}

getSum (100);
console.log (result); 