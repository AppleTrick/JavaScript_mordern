const basic = { name : 'park'};

const obj = {
    age : 20,
    __proto__ : basic,
}

console.log(obj.name, obj.age);