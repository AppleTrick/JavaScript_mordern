var x = 1;
if (true) {
    var x = 10;
}
console.log(x);     // 10

// var 키워드는 함수 코드만 지역 스코프로 인정

var i = 10;
for(var i = 0; i < 5; i++){
    console.log(i); // 0 1 2 3 4 
}

console.log(i); // 5

// var 키워드가 전역변수로 취급 되어 버린다.