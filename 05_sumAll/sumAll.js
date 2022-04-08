const sumAll = function(numA, numB) {
    let sum = 0;
    if (numA < 0 || numB < 0) return 'ERROR';
    if (typeof numA !== 'number' || typeof numB !== 'number') return 'ERROR';
    if (numA.constructor === Array || numB.constructor === Array) return 'ERROR';
    if (numA > numB) {
        let temp = numA;
        numA = numB;
        numB = temp;
    }
    for (let i = numA; i <= numB; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
