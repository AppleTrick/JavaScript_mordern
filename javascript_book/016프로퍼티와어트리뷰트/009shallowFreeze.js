const person = {
    name : 'park',
    address : {city : 'Seoul'}
}

Object.freeze(person);

console.log(Object.isFrozen(person));
// 직속 프로퍼티는 동결

console.log(Object.isFrozen(person.address));
// 중첩 객체는 동결안됨

person.address.city = 'Busan';
console.log(person);