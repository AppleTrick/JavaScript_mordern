// 문자열 'F' 를 16진수로 해석 => 10진수로 변환하여 반환
console.log(globalThis.parseInt('F', 16)); // 15

// 둘이 동일한 객체이다.
console.log(globalThis.parseInt === parseInt); // true

/*
브라우저 환경에서 동작함

var foo = 1;
console.log(window.foo);

bar = 2;
console.log(window.foo);

function bab() {return 3}
console.log(window.bab());
*/