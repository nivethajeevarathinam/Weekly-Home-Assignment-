function isOddOrEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let result = isOddOrEven(5);
console.log(result);