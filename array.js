// Array are a special type object
//### Define an array
//Literal
const arr1 = [1, 2, 3, 4];
console.log(arr1); //[1, 2, 3, 4]

//Constructor
const arr2 = new Array(2, 3, 4, 5);
console.log(arr2); //[2, 3, 4, 5]

//Access an array values by array index. index count from 0...
const arr3 = [ 9, 5, 6];
console.log(arr3[0]); //9

//Changing an array element
const arr4 = [ 10, 5, 7];
arr4[0] = 2;
console.log(arr4); //[2, 5, 7]

// Array build in properties
// length: length properties return an array elements length
const arr5 = ['Node', 'React', 'Angular', 'Vue'];
console.log(arr5.length); //4


