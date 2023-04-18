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
/* function make (callback) {
    setTimeout(function() {
        console.log('1');
        callback ()
    }, 
    3000);
}

make (function () {
    console.log ('2');
}) */

//Передача результата в коллбэк
/* function make (callback) {
    setTimeout (function () {
        let res = [1, 2, 3, 4, 5];
        callback (res);
    }, 3000);
}
// задача вывести сумму всех чисел в массиве
make (function (res) {
    let sum = res.reduce((acc, current) => acc + current, 0);
    
    console.log(sum);
})
 */


//Передача параметров в асинхронную функцию
function make (numFirst, numSecond) {
    setTimeout (function () {
        let res = [1, 2, 3, 4, 5];
        console.log(res[numFirst] + res[numSecond])
    }, 3000);
}

make (3, 4)
//Задание --Сделайте так, чтобы функция make принимала два параметра: номер одного и другого элемента массива. Пусть результатом асинхронной операции эта функция возвращает сумму указанных элементов. 

//Обработка исключений в коллбэках

function make(num, callback) {
	setTimeout(function() {
		let arr = [1, 2, 3, 4, 5];
		
		let err;
		if (arr[num] === undefined) {
			err = 'elem not exists'; // текст ошибки
		} else {
			err = null; // ошибки нет
		}
		
		callback(arr[num], err);
	}, 3000);
}

// Функция загрузки картинки
// Задание №3 Реализуйте функцию loadImage. Используйте для этого изученный вами ранее код для загрузки картинок.

function loadImage (src, callback) {
    let image = document.createElement('img');
    image.src = src;

    image.addEventListener('load', function() {
        callback (image, err); // размещаем по загрузке
    });
}

loadImage ('image.png', (image, err) => {
    if (!err) {
		document.body.append(image);
	} else {
		console.log('произошла ошибка: ' + err);
	}
})