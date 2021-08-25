function Person(name){
    this.name = name;
}

const me = new Person('park');

// 프로토타입으로 교체할 객체
const prot = {
    hi(){
        console.log(`안녕하세요 ${this.name} 입니다.`);
    }
};
// me 객체의 프로토타입을 prot으로 정한다.
Object.setPrototypeOf(me,prot);

me.hi();

// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.construtor === Person);  // false

// 프로토타입 체인을 따라 Object.prototype이 constructor 프로퍼티가 검색됨
console.log(me.constructor === Object); // true