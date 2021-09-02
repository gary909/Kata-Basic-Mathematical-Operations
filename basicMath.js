function basicOp(operation, value1, value2)
{
    if (operation == '+'){
        return value1 + value2;
    } else if (operation == '-') {
        return value1 - value2;
    } else if (operation == '*') {
        return value1 * value2;
    } else {
        return value1 / value2;
    }
}

console.log(basicOp('+', 4, 7)); // Return 11
console.log(basicOp('-', 15, 18)); // Return -3
console.log(basicOp('*', 5, 5)); // Return 25
console.log(basicOp('/', 49, 7)); // Return 7