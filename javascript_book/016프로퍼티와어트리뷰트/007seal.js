const person = {name : 'park'};

console.log(Object.isSealed(person));

Object.seal(person);

console.log(Object.isSealed(person));

console.log(Object.getOwnPropertyDescriptors(person));

person.age = 20;
console.log(person);
//추가 불가능

delete person.name;
console.log(person);
//삭제 불가능

person.name = 'Kim'
console.log(person);