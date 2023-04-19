'use strict'
//Задача №1
/* Сделайте функцию, возвращающую промис, внутри которого установлена случайная задержка от 1 до 10 секунд. Пусть своим результатом промис возвращает эту задержку. С помощью цикла и вашей функции заполните массив 10-ю промисами. */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}
let delays = []

for (let i = 0; i < 10; i++) {
    let delay = getRandomInt(1, 11) * 1000;

    delays.push(delay);
}

let promises = delays.map (el => new Promise((resolve, reject) => setTimeout(() => resolve(el), el)))

Promise.all(promises)
    .then(arr => console.log (arr))