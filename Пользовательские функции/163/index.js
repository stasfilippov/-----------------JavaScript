'use strict'; 

function func(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func(3) ); // 3 тк после здесь нет условия и выполнится сразу же первый в коде return

//=======================

function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func(10) ); // 100 тк условие соответствует false
console.log( func(-5) ); // 5 тк сработает true и return вернет 5 


//=======================


function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func(10) ); // 100
console.log( func(-5) ); // 5 