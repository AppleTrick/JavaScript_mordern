const person = {
    name : 'park',
    address : 'Seoul',
    __proto__ : {age : 20}
}

const data = Object.entries(person);
console.log(data);  // [ [ 'name', 'park' ], [ 'address', 'Seoul' ] ]

data.forEach(([key,values]) => {
    console.log(key, values);
})

/*
name park
address Seoul
*/