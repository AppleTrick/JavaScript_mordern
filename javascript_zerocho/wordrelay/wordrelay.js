var body = document.body; // html body 부분 선택
var 단어 = document.createElement('div'); // div 태그 생성
단어.textContent = '수박';  // div 안에 이름이라는 내용을 넣어준다.
document.body.append(단어); // body태그에 단어라는 변수를 추가

// 입력창 생성
var 폼 = document.createElement('form');
document.body.append(폼);

var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = "눌러주세요";
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

버튼.addEventListener('click',function 콜백함수(e) {
    e.preventDefault();
    if(단어.textContent[단어.textContent.length-1]===입력창.value[0]){
        결과창.textContent = '딩동댕';

        단어.textContent = 입력창.value;
        입력창.value='';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value='';
        입력창.focus();
    }
})


// var word = '시작';
// while(true){
//     var answer = prompt(word);
//     if (word[word.length - 1] === answer[0]) {
//         alert('딩동댕');
//         word = answer;
//     } else {
//         alert('땡');
//     }
// }