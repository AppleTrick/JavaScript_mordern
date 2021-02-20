// 옵셔널 체이닝 연산자

var elem = null;
var value = elem?.value;
console.log(value); // undefined

var elem1 = 1;
var value2 = elem1?.10 :
console.log(value2); // undefined


// 옵셔널 체이닝 이전의 연산

var elem2 = null;
var value2 = elem2 && elem2.value;
console.log(value2); // null