'use strict'
//============================ Задача №1 =========================
/* Сделайте функцию, возвращающую промис, внутри которого установлена случайная задержка от 1 до 10 секунд. Пусть своим результатом промис возвращает эту задержку. С помощью цикла и вашей функции заполните массив 10-ю промисами. */

/* function getRandomInt(min, max) {
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
    .then(arr => console.log (arr)) */



//============================ Задача 2 =========================
/* Используя массив промисов из предыдущей задачи сделайте так, чтобы в консоль вывелся результат первого сработавшего промиса. */

/* function getRandomInt(min, max) {
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

Promise.race(promises)
    .then(arr => console.log (arr)) */




//============================ Задача 3 =========================
/* Используя массив промисов из предыдущей задачи сделайте так, чтобы в консоль вывелась сумма результатов всех промисов. */
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

let promises = delays.map (el => new Promise((resolve, reject) => setTimeout(() => resolve(el / 1000), el)))

Promise.all(promises)
    .then(arr => console.log(arr.reduce ((acc, el) => acc + el, 0)))