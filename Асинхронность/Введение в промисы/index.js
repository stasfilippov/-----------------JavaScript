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

//Задача №1
//Сделайте промис, внутри которого будет задержка в 5 секунд, после которой промис должен выполнится, своим результатом вернув какой-нибудь текст. Выведите этот текст на экран.

let promise = new Promise (function (resolve) { //явно указываем параметр resolve
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