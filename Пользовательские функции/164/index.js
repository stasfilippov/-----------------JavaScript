'use strict'; 

function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
		return sum;
	}
}

console.log( func(5) ); // 1 тк как код дойдет до return, произойдет выход из цикла и из функции