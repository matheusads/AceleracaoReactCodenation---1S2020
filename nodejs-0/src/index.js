'use strict'

const fibonacci = () => {
   
    const maxValue = 350, fiboArray = [0, 1];
    let number = 1;
    while (number <= maxValue) {
        number = fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2]
        fiboArray.push(number);
    }
    return fiboArray;

}

const isPerfectSquare = (n) => {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

const isFibonnaci = (n) => {
    return isPerfectSquare(5*n*n + 4) || isPerfectSquare(5*n*n - 4); 
}

module.exports = {
    fibonacci,
    isFibonnaci
}
