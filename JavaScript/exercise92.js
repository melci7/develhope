const user = {
    id: 1,
    name: "John",
    age: 25,
};

function savetoLocal(user) {
    localStorage.setItem('user', JSON.stringify(user));
    
    let user2 = JSON.parse(localStorage.getItem('user'));
    console.log(user2);
    
}

savetoLocal(user);