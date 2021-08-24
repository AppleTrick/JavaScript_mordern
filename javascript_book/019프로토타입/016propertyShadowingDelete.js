const Person = (
    // 생성자 함수
    function(){

        function Person(name){
            this.name = name;
        }

        Person.prototype.sayHello = function(){
            console.log(`안녕하세요 제 이름은 ${this.name} 입니다 `);
        }

        // 생성자함수를 반환
        return Person;
    }()
);

const me = new Person('Lee');

me.sayHello(); //안녕하세요 제 이름은 Lee 입니다 

me.sayHello = function(){
    console.log(`안녕 난 ${this.name} 이야`);
}

me.sayHello(); //안녕 난 Lee 이야


// 삭제 했음
delete me.sayHello;

me.sayHello();  //안녕하세요 제 이름은 Lee 입니다 


// 한번 더 삭제하면 프로퍼티 메서드가 삭제될까?
delete me.sayHello;

me.sayHello(); //안녕하세요 제 이름은 Lee 입니다 