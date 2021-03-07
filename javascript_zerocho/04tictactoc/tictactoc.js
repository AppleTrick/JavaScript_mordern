var body = document.body;
var table = document.createElement('table');

var lines = []; // 칸들
var linevalue = []; // 줄들

var turn = 'X';
var result = document.createElement('div');

// 비동기 콜백 함수 추가
var callsB = function(e){
   //console.log('내가 몇칸일까?');
   //console.log(e.target); // e.target ==> 클릭된 애 -> 칸
   //console.log(e.target.parentNode); // e.target.parentNode 클릭된 애 부모 태그 ->줄
   //console.log(e.target.parentNode.parentNode);//e.target.parentNode 클릭된 애 부모 태그 의  부모 태크 -> 테이블
   //console.log(e.target.childNode);

   var lineNumber = linevalue.indexOf(e.target.parentNode);
   console.log('몇줄',lineNumber);
   var boxValue = lines[lineNumber].indexOf(e.target);
   console.log('몇칸',boxValue);

    if(lines[lineNumber][boxValue].textContent !== '') {  // input 의 값이 value 태그 안의 글자는 textContent
       console.log('빈칸이 아닙니다');
    } else {
       console.log('빈칸입니다.');
       lines[lineNumber][boxValue].textContent = turn;
       
        // 세칸 다 채워져 있는지를 확인해야된다.
        var allTrue = false;
        // 가로줄 검사
        if(
            lines[lineNumber][0].textContent === turn && 
            lines[lineNumber][1].textContent=== turn && 
            lines[lineNumber][2].textContent=== turn
            ){
            allTrue = true;
        }
        // 세로줄 검사
        if(
            lines[0][boxValue].textContent === turn &&
            lines[1][boxValue].textContent === turn &&
            lines[2][boxValue].textContent === turn
        ){
            allTrue = true
        }

        if(lineNumber === boxValue || Math.abs(boxValue-lineNumber)===2){ // 대각선 검사 필요한 경우
            if(
                lines[0][0].textContent === turn &&
                lines[1][1].textContent === turn &&
                lines[2][2].textContent === turn
            ){
                allTrue = true;
            }
        }

        if(Math.abs(boxValue-lineNumber)===2){ // 대각선 검사 필요한 경우
            if(
                lines[0][2].textContent === turn &&
                lines[1][1].textContent === turn &&
                lines[2][0].textContent === turn
            ){
                allTrue = true;
            }
        }

        if(allTrue){
            
            result.textContent = turn + ' 님이 승리했습니다';
            // 승리 했을때 초기화가 필요하다.
            turn = 'X';
            lines.forEach(function (line){
                line.forEach(function(box){
                    box.textContent='';
                })
            })
        }else{
            if( turn === 'X'){
                turn = 'O';
            } else {
                turn = 'X';  
            } 
        }
    }
   
};

for(i=1; i<=3; i++){
    var line = document.createElement('tr');
   
    lines.push([]); // 줄마다 배열 추가
    linevalue.push(line); // 몇번째 줄인지 확인할 수 있다 

    for(j=1; j<=3; j++){
        var box = document.createElement("td");
        lines[i-1].push(box); // 몇째 칸인지 알 수 있다.

        // 칸 클릭시 이벤트 발생
        line.addEventListener('click',callsB);
        line.appendChild(box);
    }
    table.appendChild(line);
}
body.appendChild(table);
body.appendChild(result);

//console.log('칸들',lines,'줄',linevalue);
