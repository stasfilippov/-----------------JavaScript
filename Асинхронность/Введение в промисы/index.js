'use strict'

// let promise = new Promise (function (resolve) { //явно указываем параметр resolve
//     //наш асинхронный код
//     setTimeout (function () {
//         let result = [1, 2, 3, 4, 5];
//         resolve (result); // явно указываем, что наш асинхронный код завершился и можем передать что-то, что требудется передать вовне
//     }, 3000); 
// })

// promise.then (function (result) {
//     // выполнится по завершении асинхронного кода
//     console.log(result)
// })

//Задача №1------------------------------------------------------------------
//Сделайте промис, внутри которого будет задержка в 5 секунд, после которой промис должен выполнится, своим результатом вернув какой-нибудь текст. Выведите этот текст на экран.

/* let promise = new Promise (function (resolve) { //явно указываем параметр resolve
    //наш асинхронный код
    setTimeout (function () {
        let result = alert('Hello World');
        resolve (result); // явно указываем, что наш асинхронный код завершился и можем передать что-то, что требудется передать вовне
    }, 5000); 
})

promise.then (function (result) {
    // выполнится по завершении асинхронного кода
    console.log(result)
})
 */

// ИСКЛЮЧИТЕЛЬНЫЕ СИТУАЦИИ 

/* let promise = new Promise (function (resolve, reject) { // добавли reject - если произойдет ошибка
    setTimeout (function () {
        let isError = false;
        
        if (!isError) {
            return resolve([1, 2, 3, 4, 5]);
        } else {
            return reject ('error in promise'); 
        }
    }, 5000); 
})

promise.then (function (result) {
    console.log(result);
}, function (error) {
    console.log(error);
}) */

// Задание №2----------------------------------------------------------------------
/* Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5. Оберните все это в промис. Пусть промис своим возвращает результат деления единицы на сгенерированное число. Пусть промис выполнится с ошибкой, если произошло деление на ноль, и с успехом во всех остальных случаях. */

/* let promise = new Promise (function (resolve, reject) { 
    setTimeout (function () {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; 
        }
        
        let randomNum = getRandomInt(0, 6); 
        
        if (!(randomNum === 0)) {
            return resolve(1 / randomNum);
        } else {
            return reject ('error in promise'); 
        }
    }, 3000); 
})

promise.then (function (result) {
    console.log(result);
}, function (error) {
    console.log(error);
})
 */

// проверка состояния промиса 
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = true; // поставьте либо true, либо false
		
		if (!isError) {
			resolve([1, 2, 3, 4, 5]);
		} else {
			reject('error in promise');
		}
	}, 3000);
});

setInterval(function() {
	console.log(promise); // каждую секунду выводим промис в консоль 
}, 1000);