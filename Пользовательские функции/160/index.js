'use strict'; 

function func(num = 5) {
	console.log(num * num);
}

func(2); // результат будет 4
func(3); // результат будет 9
func(); // результат будет 25, тк берется значение по умолчанию

//===============================

function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}

func(2, 3); // 5
func(3); // 3, второе число будет по умолчанию
func(); // 0 