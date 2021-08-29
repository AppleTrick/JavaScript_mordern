const person = {
    name : `park`,
    address : `seoul`,
    __proto__ : {age : `27`},
}

for (const key in person) {
    // if(!person.hasOwnProperty(key)) continue;
    if (Object.hasOwnProperty.call(person, key)) {
        console.log(key + ' : '+ person[key] );
    }
}

console.log("---------------------------------");

for (const key in person) {
    if(!person.hasOwnProperty(key)) continue;
    console.log(key + ' : '+ person[key] );
}