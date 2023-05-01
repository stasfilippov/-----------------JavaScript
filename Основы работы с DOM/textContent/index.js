'use strict';

const button = document.querySelector('#button');
// const numb1 = document.querySelector('#num1');
// const numb2 = document.querySelector('#num2');
// const numb3 = document.querySelector('#num3');
// const result = document.querySelector('#result');
const elem = document.querySelector('.text');

//Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
/* button.addEventListener('click', () => {
	console.log(elem.textContent);
}) */

//Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
/* button.addEventListener('click', () => {
	console.log(elem.textContent = 'hello world')
}) */

//Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
// button.addEventListener('click', () => {
// 	const sum = Number(numb1.textContent) + Number(numb2.textContent)

// 	alert(sum);
// })

//Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
// button.addEventListener('click', () => {
// 	const res = Number(numb1.textContent) + Number(numb2.textContent) + Number(numb3.textContent);

// 	result.textContent = res;

// })

//Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно
// button.addEventListener('click', () => {
// 	const res = Number(numb1.textContent) + 1;

// 	numb1.textContent = res;

// })

//Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
button.addEventListener('click', () => {
	elem.textContent = `${elem.textContent}!`
	
})