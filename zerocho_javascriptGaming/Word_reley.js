var startWord = "수박";

while(true){
    var newWord = prompt(startWord);
    if(startWord[startWord.length-1] === newWord[0]){
        startWord = newWord;
    } else {
        console.log("다시 입력해주세요");
    }
}