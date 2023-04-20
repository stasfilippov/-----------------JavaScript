export default {
	'/handler/': function ({get}) { //получаем объект в get в параметр функции
		console.log(get.num1);
		console.log(get.num2);
		return 'form data received';
	}
}