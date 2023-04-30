'use strict';

// function func1 () {
// 	console.log(1);
// }

// function func2 () {
// 	console.log(2);
// }

// const btn1 = document.querySelector('#button1');
// const btn2 = document.querySelector('#button2');

// btn1.addEventListener('click', func1)
// btn2.addEventListener('click', func2)


function func() {
	console.log('message');
}

const text1 = document.querySelector('#elem1')
const text2 = document.querySelector('#elem2')
const text3 = document.querySelector('#elem3')
const text4 = document.querySelector('#elem4')
const text5 = document.querySelector('#elem5')


text1.addEventListener('click', func)
text2.addEventListener('click', func)
text3.addEventListener('click', func)
text4.addEventListener('click', func)
text5.addEventListener('click', func)

