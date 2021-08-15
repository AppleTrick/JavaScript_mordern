const person = {};

Object.defineProperty(person,'firstName',{
    value: 'Son',
    writable: true,
    enumerable : true,
    configurable: true
});

Object.defineProperty(person,'lastName',{
    value : 'Heung-min'
});x

let descriptor = Object.getOwnPropertyDescriptor(person,'firstName');
console.log('firstName',descriptor);
//firstName { value: 'Son', writable: true, enumerable: true, configurable: true }

descriptor = Object.getOwnPropertyDescriptor(person,'lastName');
console.log('lastName',descriptor);
// lastName { value: 'Heung-min', writable : false, enumerable: false, configurable: false }

console.log(Object.keys(person));
//[ 'firstName' ] 
// lastName 은 열거할 수 없으므로 값이 나오지 않는다.

person.lastName = 'yuna'
console.log(person.lastName);
// Heung-min
// 재정의가 불가능하므로 값이 바뀌지 않는다.

delete person.lastName;
console.log(person.lastName);
// Heung-min
// 변경이 불가능하므로 값이 바뀌지 않는다.

Object.defineProperty(person,'fullName',{

    //getter
    get(){
        return `${this.firstName} ${this.lastName}`;
    },

    //setter
    set(name){
        [this.firstName,this.lastName] = name.split(' ');
    },

    enumerable : true,
    configurable : true
})

descriptor = Object.getOwnPropertyDescriptor(person,'fullName');
console.log('fullName',descriptor);

person.fullName = 'Kim yuna';
console.log(person);