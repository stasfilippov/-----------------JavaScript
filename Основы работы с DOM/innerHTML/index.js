'use strict';

const button = document.querySelector('#button');
const text = document.querySelector('.text');

button.addEventListener('click', () => {
	console.log(text.innerHTML)
})
