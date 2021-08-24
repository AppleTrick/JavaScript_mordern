function Person(name) {
    this.name = name;
}

Person.prototype.hi = function(){
    console.log(`안녕하세요 저는 ${this.name} 입니다. `);
}

const me = new Person('Park');
const you = new Person('Lee');

// me.hi()
// console.log(me);
// you.hi()
// console.log(you);

console.log(me.hasOwnProperty('name'));

console.log(Object.getPrototypeOf(me) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
