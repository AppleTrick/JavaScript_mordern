var person = {
    name : 'Lee',
    sayHello : function(){
        console.log(`Hello! My name is ${this.name}`);
    }
}

console.log(typeof person);
person.sayHello();