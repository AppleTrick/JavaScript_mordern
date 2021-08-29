const person = {name : 'park'};

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age'));  // false
console.log(person.hasOwnProperty('toString')); //false