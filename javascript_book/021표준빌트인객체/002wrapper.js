
const str = 'string';


// 원시 타입 문자열 => 랩퍼 객체인 String 인스턴스로 잠시 변환
console.log(str.length); // 2
console.log(str.toUpperCase()); // STRING

// 래퍼 객체로 접근, 메서드 호출후 원시값으로 돌림
console.log(typeof str); // string