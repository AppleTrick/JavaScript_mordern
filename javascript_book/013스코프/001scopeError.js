function add(x,y){
    console.log(x,y);
    return x**y;
}

console.log(add(2,5));

// 매개변수는 함수 몸체 내부에서만 참조가능
//console.log(x,y);