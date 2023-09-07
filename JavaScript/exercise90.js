const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25,
};

function filter(key, value) {
    if (typeof value === "string") {
        return undefined;
    }
    return value;
}

const json = JSON.stringify(person, filter);
console.log(json);