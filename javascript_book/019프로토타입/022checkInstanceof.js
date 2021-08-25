function Person(name){
    this.name = name;
}

const me = new Person('park');

const part = {

};

Object.setPrototypeOf(me, part);

console.log(Person.prototype === part);
console.log(part.constructor === Person);

console.log(me instanceof Person); // false
console.log(me instanceof Object); // true

Person.prototype = part;

console.log(me instanceof Person); // true
console.log(me instanceof Object); // true