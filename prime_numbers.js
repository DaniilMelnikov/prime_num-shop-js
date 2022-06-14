function primeNum(n) {
    if (n == 0) {
        return primeNum.arr;
    }
    if (!primeNum.arr && !primeNum.counter) {
        primeNum.arr = [];
        primeNum.counter = 1;
    }
    primeNum.counter++
    for (i = 2; i < primeNum.counter; i++) {
        if (primeNum.counter % i == 0) {
            return primeNum(n);
        }
    }
    primeNum.arr.push(primeNum.counter)
    return primeNum(n-1);
}

console.log(primeNum(process.argv[2]));