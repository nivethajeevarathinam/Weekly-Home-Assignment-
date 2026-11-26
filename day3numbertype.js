function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } 
    else if (num < 0) {
        return "Negative";
    } 
    else {
        return "Zero";
    }
}

let number = 0;
let result = checkNumber(number);

console.log(result);