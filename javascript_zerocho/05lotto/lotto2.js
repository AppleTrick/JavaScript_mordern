var body = document.body;
var candidate = Array(45).fill().map(function(e,index){
    return index+1;
});

//console.log(candidate);

var shuffle = []; // Array(0) 과 같다.

// candidate 를 뽑아서 없애기 때문에 while 문을 사용하는게 적합
// for(var i = 0; i<candidate.length; i += 1){
// } 


// for -> 정확한 반복 횟수를 알때 , while -> 기준값이 계속 바뀔때 사용한다.
while(candidate.length > 0){
    // 엄밀하게 수학적로는 아니다.
    // 진짜 랜덤이 필요한 곳에서는 랜덤 api나 알고리즘을 사용할 수 있도록 한다.
    var moveVal = candidate.splice(Math.floor(Math.random() * candidate.length),1)[0];
    shuffle.push(moveVal)
}

console.log(shuffle);
var bonus = shuffle[shuffle.length-1];
var wining = shuffle.slice(0,6).sort(function (p,c) {
    return p - c;
}); // 배열을 0 부터 6번째 자리 전까지 자른다.

console.log('당첨숫자',wining,'보너스',bonus);
/*
    당첨숫자 [ 21, 43, 11, 42, 29, 16 ] 보너스 34
*/

//console.log('당첨숫자',wining,'보너스',bonus);

// 1,2,3 위주로 된다.

// console.log('당첨숫자',wining.sort(function(p,c) {
//     return p-c;
//     // 내림차순으로 하고 싶으면 c-p

//     // 바뀌는 이유에 관하여..
//     // 뺀 결과가 0 보다 크면 순서를 바꾼다.
// }),'보너스',bonus);

var result = document.getElementById('result'); // id 일 경우 id로 사용한다.

function drawBall(number,result) {
    var ball = document.createElement("div"); 
        ball.textContent = number;
        ball.style.display = 'inline-block' // 자바스크립트에서 css 조작법
        ball.style.border = '1px solid black';
        ball.style.borderRadius = '10px'; // border-radius => borderRadius 로 변환 - 를 대문자로 변환시킨다.
        ball.style.width='20px';
        ball.style.height='20px';
        ball.style.textAlign='center';
        ball.style.marginRight='10px';
        ball.id = 'ballid'+number;

        // ball.className = 'ballid'+number; -> 자바스크립트는 class가 중요해서 ClassName 이라고 명칭한다.
        var bgcolor;
        if (number <= 10) {
            bgcolor = "red"
        } else if(number <= 20){
            bgcolor = "orange"
        } else if(number <= 30){
            bgcolor = "yellow"
        } else if(number <= 40){
            bgcolor = "blue"
        } else{
            bgcolor = "green"
        } 

        ball.style.background = bgcolor;
        result.appendChild(ball);
}

//for( var i = 0; i< wining.length; i++){

    setTimeout(function callback() {
        drawBall(wining[0],result);
    } , 1000) // 비동기를 위한 동작 
    //setTimeout(function , time) 1000 -> 1초

    setTimeout(function callback() {
        drawBall(wining[1],result);
    } , 2000)

    setTimeout(function callback() {
        drawBall(wining[2],result);
    } , 3000)

    setTimeout(function callback() {
        drawBall(wining[3],result);
    } , 4000)

    setTimeout(function callback() {
        drawBall(wining[4],result);
    } , 5000)

    setTimeout(function callback() {
        drawBall(wining[5],result);
    } , 6000)
//}

// 클로저 문제로 인한 작동 불가;
// 반복문 안에 비동기 사용시 클로저 문제 발생




setTimeout(function callback() {
    var bonusClass  = document.getElementsByClassName('bonus')[0]; 
    // Class 는 여러번 쓸수 있어서 배열로 선택 가능

    // var bonusball = document.createElement("div");
    // bonusball.textContent = bonus;
    // bonusball.style.display = 'inline-block' // 자바스크립트에서 css 조작법
    // bonusball.style.border = '1px solid black';
    // bonusball.style.borderRadius = '10px'; // border-radius => borderRadius 로 변환 - 를 대문자로 변환시킨다.
    // bonusball.style.width='20px';
    // bonusball.style.height='20px';
    // bonusball.style.textAlign='center';
    // bonusClass.appendChild(bonusball);
    drawBall(bonus,bonusClass)
} , 7000)

// css 로 태그를 찾을때는 querySelector 을 사용한다. -> 