const Person = (function(){
    function Person(name){
        this.name = name;
    }

    // 생성자 함수를 통해 프로토타입을 교체함
    Person.prototype = {
        // constructor 프로퍼티와 생성자 함수간을 연결을 통해 해결이 가능
        constructor : Person,
        hi(){
            console.log(`제 이름은 ${this.name} 입니다.`);
        }
    }

    return Person;
}());

const me = new Person('Lee');

console.log(me.constructor === Person);
console.log(me.constructor === Object);