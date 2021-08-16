const person = {name : 'park'};

console.log(Object.isExtensible(person));

Object.preventExtensions(person);

console.log(Object.isExtensible(person));

person.age = 27;
// 추가가 되지 않는다.
console.log(person);

// 삭제는 가능하다.
delete person.name;
console.log(person);

Object.defineProperty(person, 'age',{value : 20});
// 프로퍼티 정의에 의한 추가도 금지 된다.