function greaterThan(number) {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve("Number is greater than 10");
        } else {
            reject("Number is less than 10");
        }
    })
}

greaterThan(15)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))