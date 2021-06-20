const arr = new Array(1);
console.log(arr);
//[ <1 empty item> ]

const arr1 = new Array(1,2,3);
console.log(arr1);
//[ 1, 2, 3 ]

const arr2 = Array.of(1);
console.log(arr2);
//[ 1 ]

const arr3 = Array.from({0:'a',1:'b',length:2})
console.log(arr3);
//[ 'a', 'b' ]