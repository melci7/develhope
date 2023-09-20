function isLogged(value) {
    return new Promise((resolve, reject) => {
        if (value) {
            resolve(Math.random())
        } else {
            reject("Error")
        }
    })
}
function greater_Than(number) {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({name: "John", age: 24})
        } else {
            reject("Error2")
        }
    })
}

isLogged(true)
    .then((res) => {
    if (res == null) {
        throw new Error(`Error! Status: ${res.status}`);
    }
    console.log(res)})

    .catch((err) => console.log(err))
    greater_Than(0.6)
    .then((res) => {
    if (res == null) {
        throw new Error(`Error! Status: ${res.status}`);
    }
    console.log(res)})
    .catch((err) => console.log(err))
    .finally(() => {
        console.log("Code runs")
    })