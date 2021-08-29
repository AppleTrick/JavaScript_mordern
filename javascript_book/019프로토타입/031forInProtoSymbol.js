const sym = Symbol();

const person = {
    name : `park`,
    address : `seoul`,
    __proto__ : {age : `27`},
    [sym] : 10
}

for (const key in person) {
    console.log(`${key} : ${person[key]}`);
}

// name : park
// address : seoul
// age : 27