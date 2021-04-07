// refectoring 정리

var computer = 0;

var dictionary = {
    가위 : '0',
    바위 : '-142px',
    보 : '-284px'
};

var dictionary2 = {
    '0' : '바위',
    '-142px' : '가위',
    '-284px' : '보'
}

console.log(Object.entries(dictionary));

var find = Object.entries(dictionary).find(function (v) { //  (배열.find)는 반복문이지만 원하는 것을 찾으면 (return = true) 면 멈춥니다. 
    console.log(v);                                       //  Object.entries 는 객체를 2차원 배열로
    return v[0] === '바위';
})

console.log(find);


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

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click',function () {
        var mychoose = this.textContent;
        console.log(mychoose,dictionary2[computer]);
    })
})
