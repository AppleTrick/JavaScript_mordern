const arr = [1,2,3];
arr.x = 10;

console.log(arr);
console.log("---");
//for in으로 사용가능
for(const i in arr){
    console.log(arr[i]);
}

console.log("---");
// for문 사용 가능
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("---");
// for each로 도 사용가능 요소가 아닌 프로퍼티는 제외한다.
arr.forEach(element => {
    console.log(element);
});

console.log("---");
//for of 도 사용가능 => 프로퍼티 값은 안나옴
for(const value of arr){
    console.log(value);
}


