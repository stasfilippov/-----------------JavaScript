/* function make () {
    // здесь выполняется асинхронный код
    setTimeout(function() {
        console.log('1');
    }, 3000);
}

make ()
console.log(2) */

/* try {
	elem.addEventListener('click', function() {
		throw(new Error); // исключение не будет поймано  
	});
} catch(error) {
	console.log(error);
} */

//Добавляем колбек в функцию
function make (callback) {
    setTimeout(function() {
        console.log('1');
        callback ()
    }, 
    3000);
}

make (function () {
    console.log ('2');
})

//Передача результата в коллбэк
function getArray (callback) {
    setTimeout (function () {
        let res = [1, 2, 3, 4, 5];
        callback (res);
    }, 3000);
}

getArray (function (res) {
    let sum = res.reduce((acc, current) => acc + current, 0);
    
    console.log(sum);
})