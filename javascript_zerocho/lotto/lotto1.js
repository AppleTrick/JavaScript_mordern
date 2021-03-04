var candidate = Array(45);
var fill = candidate.fill();

// 1:1 매칭 시켜서 값을 넣어주는 것을 mapping 한다.

var map = fill.map(function(e,index){
    return index + 1;
})
// undefined --> index 로 변경


console.log(map);