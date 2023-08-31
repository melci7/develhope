class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set age(value) {
        this._age = value;
    }
    get age() {
        return this._age;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);