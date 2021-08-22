
// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log((function() {}).hasOwnProperty('prototype'));

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log(({}).hasOwnProperty('prototype'));

const a = {};

console.log(a.hasOwnProperty('prototype'));

console.log(a.hasOwnProperty('__proto__'));
