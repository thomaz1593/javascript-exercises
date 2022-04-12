const fibonacci = function(num) {
    let result = [];
    result [0] = 1;
    result [1] = 1;
    if (num < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i < num; i++) {
            result[i] = result[i - 2] + result[i - 1];
        }
    }
    return result.pop();
};

// Do not edit below this line
module.exports = fibonacci;
