export default {
	'/handler/': function ({get}) { //получаем объект в get в параметр функции
		let arr = [];

		for (key in get) {
			arr.push(Number(get.key));
		}

		let sumArr = arr.reduce ((acc, el) => acc + el, 0);
		let res = sumArr / arr.length;
		return res;
	}
}

