const Person = name => {
    this.name = name;
}

// non-constructor는 프로토타입이 생성되지 않는다.
console.log(Person.prototype);

console.log(Array.constructor);