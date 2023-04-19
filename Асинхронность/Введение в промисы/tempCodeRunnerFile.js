let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let isError = false; // поставьте либо true, либо false
		
		if (!isError) {
			resolve([1, 2, 3, 4, 5]);
		} else {
			reject('error in promise');
		}
	}, 3000);
});

setInterval(function() {
	console.log(promise); // каждую секунду выводим промис в консоль 
}, 1000);