class Person {
    constructor(id, firstName, lastName, age) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
}
  
const developer = new Person(1, 'Mario', 'Rossi', 25);
let jsonObject = JSON.stringify(developer);

console.log(jsonObject);
console.log(developer);