var 바디 = document.body;

// 배열은 공통된 항목을 묶을때 사용
var numbers = [1,2,3,4,5,6,7,8,9];

// 뽑아내고 출력할 방법
var result = [];

for(var i = 0; i < 4; i += 1){
    // floor 0~8 이기 때문에 
    // random 이고 하나씩 줄어야되기 때문에 -i 를 추가
    var cat = numbers.splice(Math.floor(Math.random()*9-i),1)[0];
    result.push(cat);
}

console.log(result);

var resultset = document.createElement('h1');
바디.append(resultset);

var formInform = document.createElement('form');
바디.append(formInform);

var inputText = document.createElement('input');
formInform.append(inputText)
inputText.maxLength = 4;

var inputButton = document.createElement('button');
inputButton.textContent = '입력';
formInform.append(inputButton);


var count = 0;


formInform.addEventListener('submit',function 비동기(e){
    e.preventDefault();
    var answer = inputText.value;
    console.log(answer, result, answer===result.join(''));

    if (answer === result.join('')) {
        resultset.textContent = '홈런';
        inputText.value = '';
        inputText.focus();
        numbers = [1,2,3,4,5,6,7,8,9];
        result = [];
        for(var i = 0; i < 4; i += 1){
            var cat = numbers.splice(Math.floor(Math.random()*9-i),1)[0];
            result.push(cat);
        }
    } else {
        count++;
        if(count > 10 ){
            resultset.textContent = '10번이상 틀렷습니다. 답은' + result.join() +'입니다';
        }
        var answerArr = answer.split('');
        var strike = 0;
        var ball = 0;

        for (var i = 0; i < 3; i++){
            if(Number(answerArr[i]) === result[i]){ // 같은 자리인지 확인
                strike++;
            } else if(result.indexOf(answerArr[i]) > -1){ // 같은 자리는 아니지만 숫자가 겹치는지 확인
                ball++
            }
        }
        resultset.textContent= strike + '스트라이크 ' + ball + '볼 ';
        inputText.value = '';
        inputText.focus();
    }
})