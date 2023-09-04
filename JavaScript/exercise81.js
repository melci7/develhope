const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };

function newPerson(id, ...person1) {
    console.log(id, person1);
}
  
newPerson(1, {firstName: 'Mario', lastName: 'Rossi', age: 25});