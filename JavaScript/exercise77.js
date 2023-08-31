function repeatHello(callback) {
    let hello = setInterval(() => {
        callback();
    }, 1000);
    setTimeout(()=>{ clearInterval(hello)},5000);
}

let hello = () => {
    console.log("Hello");
}

repeatHello(hello);