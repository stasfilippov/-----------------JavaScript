'use strict';

//Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
const button = document.querySelector('#button');
const elem = document.querySelector('#elem');

button.addEventListener('click', () => {
	console.log(elem.textContent);
})


