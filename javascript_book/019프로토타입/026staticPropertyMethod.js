//생성자 함수
function Person(name){
    this.name = name;
}
// 프로토타입 메서드
Person.prototype.hi = function(){
    console.log(`안녕하세요 ${this.name} 입니다.`);
}
// 정적 프로퍼티
Person.staticProp = `static 프로퍼티`;

// 정적 메서드
Person.staticMethod = function(){
    console.log('static 메소드');
}

const me = new Person('park');
// const me = Object.create(Person); => person의 전부를 상속 받으므로 사용가능하다.

Person.staticMethod();  // 생성자 함수에 추가한 프로퍼티/메서드는 참조/호출 가능

me.staticMethod(); // 인스턴스로 참조 호출할 수 있는 프로퍼티는 프로토타입 체인상에 존재하야한다.
