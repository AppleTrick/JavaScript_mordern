var computer = 0;

var dictionary = {
    // 자바스크립트 객체는 딕셔너리 자료구조 역할을 할 수 있다.
    // 1:1 매칭을 표현 할 수 있다.
    가위 : '0',
    바위 : '-142px',
    보 : '-284px'
};

var dictionary2 = {
    '0' : '바위',
    '-142px' : '가위',
    '-284px' : '보'
}

// dictionary 의 단점 -> 바꿀때 힘듬, 손을 사용해서 직접 바꿔야됨 이런 사항이 매우 힘듬

console.log(Object.entries(dictionary));

//Object.entries(객체)로 객체를 배열로 바꿀 수 있다. 
/*
0: (2) ["가위", "0"]
1: (2) ["바위", "-142px"]
2: (2) ["보", "-284px"]
*/

var find = Object.entries(dictionary).find(function (v) { //  (배열.find)는 반복문이지만 원하는 것을 찾으면 (return = true) 면 멈춥니다. 
    console.log(v);                                       //  Object.entries 는 객체를 2차원 배열로
    return v[0] === '바위';
})

console.log(find);



// 1:N 의 경우
// 배열을 이용하여 1:N 구조를 만들 수 있다.

// 화살표 함수 사용시

// setInterval(() => {
//     if (computer === 0) {
//         computer = '-142px';
//     } else if(computer === '-142px'){
//         computer = '-284px';
//     } else {
//         computer = 0;
//     }
//     document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + computer + ' 0' ;
// }, 100);

/*
    setTimeout 은 한번 실행하지만
    setInterval 은 Interval 만큼 계속 반복 한다.
*/

// 일반 함수 사용시

setInterval(function () {
    if (computer === dictionary.바위) {
        computer = dictionary.가위;
    } else if(computer === dictionary.가위){
        computer = dictionary.바위;
    } else {
        computer = dictionary.바위;
    }
    
    document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + computer + ' 0' ;
}, 100);

// document.querySelector('#rock').addEventListener('click',function(){
//     // 가위 바위 보 의 반복 
// })

// // class 3개 전부 선택
// document.querySelectorAll('.btn').addEventListener('click',function(){
//     // 가위 바위 보 의 반복 
// })

// 반복문을 돌려야된다.
// query selectorAll 의 경우는 forEach 문을 지원 한다.
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click',function () {
        var mychoose = this.textContent;
        console.log(mychoose,dictionary2[computer]);
    })
})
