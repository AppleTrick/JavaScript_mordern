const person = {
    name : 'Lee',
    address : 'Seoul'
}

//person 객체에 name 프로퍼티가 존재한다.
console.log('name' in person);
//person 객체에 age 프로퍼티는 존재하지 않는다.
console.log('age' in person);

// toString 은 Object.prototype의 메서드 이름으로 true가 나오게된다.
console.log('toString' in person);
