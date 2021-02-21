var number1 = Math.ceil(Math.random()*9);
var number2 = Math.ceil(Math.random()*9);

var result = number1 * number2;

var 바디 = document.body;

var 단어 = document.createElement('div');
단어.textContent = number1 + ' 곱하기 ' + number2 + '는 ?';

바디.append(단어);

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
    if(result === +(입력창.value)){
        결과창.textContent = '딩동댕';

        number1 = Math.ceil(Math.random()*9);
        number2 = Math.ceil(Math.random()*9);
        result = number1 * number2;
        단어.textContent = number1 + ' 곱하기 ' + number2 + '는 ?';

        입력창.value ='';
        입력창.focus();
    }else{
        결과창.textContent = '땡';
        입력창.value ='';
        입력창.focus();
    }
})