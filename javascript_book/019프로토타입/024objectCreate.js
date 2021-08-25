let obj;


// 임의의 객체
const myProto = { x: 10};
obj = Object.create(myProto);
console.log(obj.x)
console.log(Object.getPrototypeOf(obj) === myProto);

// 생성자함수
function Person (name){
    this.name = name;
}

obj = Object.create(Person.prototype);
obj.name ='Lee';
console.log(obj.name);
console.log(Object.getPrototypeOf(obj) === Person.prototype);