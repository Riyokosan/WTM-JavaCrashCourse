const Person = require('./person');
const Database = require('./database');

console.log('Hello World');

const amelie = new Person('Amélie', 25);
const lukas = new Person('Lukáš', 30);

amelie.sayName();

const instructors = [amelie, lukas];

Database.save(instructors);

const loadedFile = Database.load();

// console.log(loadedFile[0].age);