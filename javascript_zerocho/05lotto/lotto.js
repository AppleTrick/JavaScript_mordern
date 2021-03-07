// [1,2,3,4,5,6 ~~~~ 45]; 폼이 안난다.
var candidate = Array(45); // 빈 배열 생성
//console.log(candidate); // [ <45 empty items> ]

[undefined,undefined,undefined].forEach(function(e){ // undefined로 저장된것!
    //console.log(e);
})

candidate.forEach(function(e){  // empty 로 저장되면 아무런 값도 안나오게된다.
    //console.log(e);
})

var fill = candidate.fill();
//console.log(fill); // empty 가 아닌 undefined로 저장되어 있음

fill.forEach(function(element,index){
    //console.log(element,index+1);
    fill[index] = index+1;
})

console.log(fill);