'use strict'; 

function func(num1, num2) {
	let res;
	
	if (num1 > 0 && num2 > 0) {
		res = num1 * num2;
	} else {
		res = num1 - num2;
	}
	
	return res;
}

console.log(func(3, 4));

// сокращенная форма

function func (num1, num2) {
    if (num1 > 0 && num2 > 0) {
        return num1 * num2;
    } else {
        return num1 - num2;
    }
}

console.log(func(3, 4));
