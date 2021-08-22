const obj = {};

const add = function(a,b){return a + b };

const arr = [1,2,3];

const regexp = /is/ig;

console.log(obj.constructor === Object);
console.log(add.constructor === Function);
console.log(arr.constructor === Array);
console.log(regexp.constructor === RegExp);