const figlet = require("figlet");

function message(text) {
    figlet(text, function(err, data) {
        if (err) {
            console.log('Hata:', err);
            return;
        }
        console.log(data);
    });
}

message("Hello World!");