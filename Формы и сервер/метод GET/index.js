'use strict'; 

function getEvenNumb (arr) {
	for (let elem of arr) {
		if ((elem / 2) != 0) {
			return false;
		} 
	}
	return true; 
}

console.log(getEvenNumb ([2, 4, 6, 8]));

