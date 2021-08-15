// 객체선언
const person = {
    name : 'park'
}

// 프로퍼티 동적 생성
person.age = 27;

console.log(Object.getOwnPropertyDescriptors(person));
// {
//     name: {
//       value: 'park',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: 27, writable: true, enumerable: true, configurable: true }
// }