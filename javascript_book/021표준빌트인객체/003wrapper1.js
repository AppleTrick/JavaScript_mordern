const str = 'String'

// 랩퍼 객체에서 생성된 부분을 의미한ek
str.state = "let's go";

// 암묵적으로 생성된 랩퍼객체는 사라지고 새로운 랩퍼객체에서 생성됫기에 state 존재하지 않음
console.log(str.state); // undefined