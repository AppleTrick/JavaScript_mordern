const person = {
    firstName : 'Son',
    LastName : 'Heung-min',

    get fullName(){
        return `${this.firstName} ${this.LastName}`;
    },
    set fullName(name){
        [this.firstName, this.LastName] = name.split(' ');
    }
}
console.log(person);
//{ firstName: 'Son', LastName: 'Heung-min', fullName: [Getter/Setter] }

console.log(`${person.firstName} ${person.LastName}`);
//Son Heung-min

person.fullName = 'Kim Yeon-Ah';
console.log(person);
//{ firstName: 'Kim', LastName: 'Yeon-Ah', fullName: [Getter/Setter] }

console.log(person.fullName);
//Kim Yeon-Ah
