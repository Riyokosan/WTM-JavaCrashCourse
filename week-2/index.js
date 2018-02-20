const Person = require('./person');
const Database = require('./database');

console.log('Hello World');

const amelie = new Person('Amélie', 25);
const lukas = new Person('Lukáš', 30);

// amelie.sayName();

const instructors = [amelie, lukas];

Database.save(instructors, (err) => console.log('We are finally in the future!'));

console.log('Are we there yet?');

// const loadedInstructors = Database.load();

// const firstPerson = Person.create(loadedInstructors[0].name, loadedInstructors[0].age);

// const convertedInstructors = loadedInstructors.map(Person.create);

// convertedInstructors[0].sayName();

// const firstPerson = Person.create(loadedInstructors[0]);

// const secondPerson = Person.create(loadedInstructors[1]);

// firstPerson.sayName();
// secondPerson.sayName();
// console.log(loadedFile[0].age);