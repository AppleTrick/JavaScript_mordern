const person = {
    name : 'park',
    address : 'seoul'
};

for (const key in person) {
    console.log(`${key} : ${person[key]}`);
}