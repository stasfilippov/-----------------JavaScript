'use strict';

function func1 () {
	console.log(1);
}

function func2 () {
	console.log(2);
}

const btn1 = document.querySelector('#button1');
const btn2 = document.querySelector('#button2');

btn1.addEventListener('click', func1)
btn2.addEventListener('click', func2)

