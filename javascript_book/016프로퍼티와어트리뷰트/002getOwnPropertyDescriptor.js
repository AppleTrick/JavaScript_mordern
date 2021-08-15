const person = {
    name : 'park'
};

// 객체에 대한 프로퍼티 값을 알아 볼 수 있다.

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//{ value: 'park', writable: true, enumerable: true, configurable: true }