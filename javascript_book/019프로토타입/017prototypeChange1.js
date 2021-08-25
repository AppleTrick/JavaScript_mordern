const Person = (function(){
    function Person(name){
        this.name = name;
    }

    // 생성자 함수를 통해 프로토타입을 교체함
    Person.prototype = {
        hi(){
            console.log(`제 이름은 ${this.name} 입니다.`);
        }
    }

    return Person;
}());

const me = new Person('Lee');

console.log(me.constructor === Person);
console.log(me.constructor === Object);