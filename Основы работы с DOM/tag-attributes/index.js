'use strict';

// const button = document.querySelector('#button');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');


const elem = document.querySelector('#elem');
const link = document.querySelector('#link');
const img = document.querySelector('#img');

// button.addEventListener('click', () => {
// 	alert(elem.type)
// })

// button.addEventListener('click', () => {
// 	img.width = img.width * 2;
// })

// button.addEventListener('click', () => {
// 	img.width = img.width * 2;
// })

button1.addEventListener('click', () => {
	img.src = './home/img.png';
})

button2.addEventListener('click', () => {
	img.src = './images/img.png';
})