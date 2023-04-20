'use strict'; 

function func(a, b) {
	return a == b;
}

console.log(func (2, 2)); 

//======================================

function func(a, b) {
	return a != b; 
}

console.log(func(1, 2));

//================================

function func(a, b) {
	return (a + b >= 10); 
}

//===============================

function func(num) {
	return num >= 0; 
}