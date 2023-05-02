'use strict';

const button = document.querySelector('#button');
const inputField = document.querySelector('#input-form');
const inputResult = document.querySelector('#input-res');
const elem = document.querySelector('#elem');
const elements = document.querySelectorAll('.input-numb');
const input = document.querySelectorAll('input');


// #1
// button.addEventListener('click', () => {
//     input.value = 'Имя Фамилия'
// })

//#2
// button.addEventListener('click', () => {
//     const numb = Number(inputField.value);

//     inputResult.value = Math.pow(numb, 2);
// })


//3 
// button.addEventListener('click', () => {
//     const numb = Number(inputField.value);

//     inputResult.value = Math.pow(numb, 2);
// })

//4
// button.addEventListener('click', () => {
//     let both = inputField.value;
//     inputField.value = inputResult.value;
//     inputResult.value = both;
// })

//5
button.addEventListener ('click', () => {
    const arr = [];
    elements.forEach(e => {
        arr.push(Number(e.value));
    })
    
    const res = arr.reduce((acc, elem) => acc + elem)
    console.log(res)
    elem.textContent = res / arr.length;
})