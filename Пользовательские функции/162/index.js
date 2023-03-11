'use strict'; 

/* function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}

let res = console.log (round(sqrt(2))); */

//==============

/* function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

console.log (sum(sqrt(2), sqrt(3), sqrt(4))); */

//==============

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num) {
	return num.toFixed(3);
}

let resSum = sum(sqrt(2), sqrt(3), sqrt(4));

let res = round (resSum);
console.log (res); 
