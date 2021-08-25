function Person(name){
    this.name = name;
}

const me = new Person('park');

console.log(me instanceof Person); // true

console.log(me instanceof Object); // true