function printAsyncName(callback, name) {
    let id = setInterval(() => {
        callback();
        setTimeout(() => {
          console.log(name);
        }, 2000)
    }, 1000)
    setTimeout(() => { clearInterval(id)}, 5000);
}
function hello() {
    console.log("Hello");
}
printAsyncName(hello, "Muhammed");