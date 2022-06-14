function primeNum(n) {
    if (!primeNum.arr && !primeNum.counter) {
        primeNum.arr = [];
        primeNum.counter = 1;
    }
    primeNum.counter++
    for (i = 2; n != 0; i++) {
        if (primeNum.counter % i == 0 && primeNum.counter != 2) {
            return primeNum(n);
        }
        primeNum.arr.push(primeNum.counter)
        return primeNum(n-1);
    }
    return primeNum.arr;
    
}

console.log(primeNum(process.argv[2]));