function Person(name){
    this.name = name;
}

Person.prototype.hi = function(age){
    console.log(`안녕하세요 제 이름은 ${this.name} 이고 나이는 ${age} 입니다`);
}

Person.x = 10;

console.log(Person.x);

const me = new Person('Park');
const you = new Person('Kim');

me.hi(18);
you.hi(19);