function func (numb) {
    let res;
    let i = 1;

    while (true) {
        res = numb / 2; 

        if (res < 10) {
            return i;
        }

        i++;
    }
}

console.log (func(100)); 