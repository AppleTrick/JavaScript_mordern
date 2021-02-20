var body = document.body; // html body 부분 선택
var 단어 = document.createElement('div'); // div 태그 생성
단어.textContent = '이름';  // div 안에 이름이라는 내용을 넣어준다.
document.body.append(단어); // body태그에 단어라는 변수를 추가

// 입력창 생성
var 입력창 = document.createElement('input');
document.body.append(입력창);
// 버튼창 생성
var 버튼 = document.createElement('button');
document.body.append(버튼);




var word = '시작';
while(true){
    var answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        alert('딩동댕');
        word = answer;
    } else {
        alert('땡');
    }
}