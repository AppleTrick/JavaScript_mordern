// 배열에서 라 를 모두 제거하시오
const arr = ['가','라','가','라','가','라','가'];

console.log(arr);

while( arr.indexOf('라') > -1){
    arr.splice(arr.indexOf('라'),1);
}

console.log(arr);

