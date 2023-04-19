'use strict'

/* let promise = new Promise (function (resolve, reject) {
    setTimeout (function () {
        resolve ('string')
    }, 3000)
})

promise.then (function (result) {
    return result + '!';
}).then (function (result) {
    console.log (result)
}) */ // построили цепочку промисов

// возможно использовать промисы внутри цепочки
/* let promise = new Promise (function (resolve, reject) {
    setTimeout (function () {
        resolve ('string')
    }, 2000)
})

promise.then(function (result) {
    return result + '1';
}).then (function (result) {
    return new Promise (function (resolve, reject) {
        resolve (result + '2')
    }) 
}).then (function (result) {
    console.log (result);
})  */


//Способы исправления ошибки
let promise = new Promise (function (resolve, reject) {
    setTimeout (function () {
        reject ('error')
    }, 2000)
})
//-----------------
promise.then(function (result) {
    return result + '1';
}).then (function (error) {
    console.log (error); // вариант обработки ошибки через then
})
//-------------
promise.then(function (result) {
    return result + '1';
}).catch (function (error) {
    console.log (error); // вариант обработки ошибки через catch
})

//--------------------
promise.then (function (result) {
    return result + '1';
}).then (function (result) { 
    if (result) {  // проверка на возникновение ошибки в самой цепочке промисов
        return result + 1
    } else {
        throw new Error ('ошибка'); // через throw ошибка будет выкидываться в близжайший обработчик-ошибок
    }
}).then (function (result) {
    return result + '2';
}).catch (function (error) { // примет ошибку и обработает
    console.log (error)
})