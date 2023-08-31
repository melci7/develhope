function multiplyByTwo(input) {
    function inner() {
        return input * 2;
    }
    return inner;
}

console.log(multiplyByTwo(4)());