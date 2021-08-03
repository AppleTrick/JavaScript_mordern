var x = 1;
var y = 1;

// var 키워드의 선언된 변수의 같은 스코프 내에서 중복 선언
// 초기문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것 처럼 동작

var x = 100;

// 초기문이 없는 변수 선언문은 무시된다.
var y;

console.log(x);
console.log(y);
