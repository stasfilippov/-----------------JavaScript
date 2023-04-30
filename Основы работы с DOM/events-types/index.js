'use strict';

const btn = document.querySelector('#button');
//событие dblclick
// btn1.addEventListener('dblclick', () => {
// 	console.log('hello')
// })

//событие mouseover
btn.addEventListener('mouseover', () => {
	console.log('1')
})

//событие mouseout
btn.addEventListener('mouseout', () => {
	console.log('2')
})

