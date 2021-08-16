const person = { name : 'park'};

console.log(Object.isFrozen(person));

Object.freeze(person);

console.log(Object.isFrozen(person));

console.log(Object.getOwnPropertyDescriptors(person));

person.age = 20;
console.log(person);
// 추가 금지

delete person.name;
console.log(person);
// 삭제 금지

person.name = 'Kim';
console.log(person);
// 갱신 금지