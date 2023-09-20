const user = {
    id: 1,
    name: "John",
    age: 25,
};

function savetoLocal(user) {
    localStorage.setItem('user', JSON.stringify(user));
}
