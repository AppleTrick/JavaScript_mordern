function Person(name){
    this.name = name;
}

const me = new Person('park');

// 프로토타입으로 교체할 객체
const prot = {
    // constructor 프로퍼티와 생성자 함수간의 연결을 직접적으로 설정한다.
    constructor : Person,
    hi(){
        console.log(`안녕하세요 ${this.name} 입니다.`);
    }
};

// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person.prototype = prot;

// me 객체의 프로토타입을 prot으로 교체
Object.setPrototypeOf(me,prot);

me.hi();

console.log(me.constructor === Person);  // true
console.log(me.constructor === Object); // false