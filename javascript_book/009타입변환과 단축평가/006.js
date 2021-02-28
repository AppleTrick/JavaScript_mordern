var elem = null;


// elem이 null 또는 undefined 면  undefined를 반환하고
// 그렇지 않으면 우항의 프로퍼티 참조를 이어 나간다.

var value = elem?.value;
console.log("1" + value);

// 옵셔널 체이닝 연산자 ?. 는 갳게를 가리키기를 기대하는 변수가 null 또는 undeifined가 아닌지 확인하고 프로퍼티 참조때 유용한다.

var str = '';
var length = str && str.length;
console.log("2" +length);


var str1  = '';
var length1 = str1?.length1;
console.log("3" +length1);

let str2 = '아';
let length2 = '이';
console.log(str2?.length2);

var student = {
    name : "창희",
    age : null,
    from : "seoul"
}

var result = student?.age;
console.log("5 " + result);