function sumUntil(input) {
    let sum = 0;
    for(let i = 1; i <= input; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumUntil(5));
