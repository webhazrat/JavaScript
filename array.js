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

// Array- buildin properties
// length: length properties return an array elements length
const arr5 = ['Node', 'React', 'Angular', 'Vue'];
console.log(arr5.length); //4

//### Array- Buildin methods
// toString: this method use for array to string
const arr6 = ['Node', 'React', 'Angular', 'Vue'];
console.log(arr6.toString()); //Node,React,Angular,Vue

// join: this method use for join an array elements with something
const arr7 = ['Node', 'React', 'Angular', 'Vue'];
console.log(arr7.join('+')); //Node+React+Angular+Vue

// unshift: this method use for add array element at the first
const arr8 = ['Node', 'React', 'Angular', 'Vue'];
arr8.unshift('React Native');
console.log(arr8); //[ 'React Native', 'Node', 'React', 'Angular', 'Vue' ]

// push: this method use for add array element at the last
const arr9 = ['Node', 'React', 'Angular', 'Vue'];
arr9.push('React Native');
console.log(arr9); //[ 'Node', 'React', 'Angular', 'Vue', 'React Native' ]

// shift: this method use for remove an element at the first
const arr10 = ['Node', 'React', 'Angular', 'Vue'];
arr10.shift();
console.log(arr10); //[ 'React', 'Angular', 'Vue' ]

// pop: this method use for remove an element at the last
const arr11 = ['Node', 'React', 'Angular', 'Vue'];
arr11.pop();
console.log(arr11); //[ 'Node', 'React', 'Angular' ]

// splice: this method use for add and remove array items
// splice(index, removeCount, addItems)
const arr12 = ['Node', 'React', 'Angular', 'Vue'];
arr12.splice(2, 0, 'React Native', 'Ionic');
console.log(arr12); //[ 'Node', 'React', 'React Native', 'Ionic', 'Angular', 'Vue' ]

const arr13 = ['Node', 'React', 'Angular', 'Vue'];
arr13.splice(2, 1);
console.log(arr13); //[ 'Node', 'React', 'Vue' ]

// concat: this method create a new array. It doesn't change the source array
const arr14 = ['Node', 'React', 'Angular', 'Vue'];
const arr15 = ['React Native', 'Ionic', 'Flutter'];
const concatArr = arr14.concat(arr15);
console.log(concatArr); //['Node', 'React', 'Angular', 'Vue', 'React Native', 'Ionic', 'Flutter']

// slice: this method create a new array. It doesn't remove any elements from the source array. It's remove from starting
// remove slice(fromIndex, toIndex) without others
const arr16 = ['Node', 'React', 'Angular', 'Vue'];
const sliceArr =  arr16.slice(2); //[ 'Angular', 'Vue' ]
console.log(sliceArr);
const sliceArr2 =  arr16.slice(1, 3); 
console.log(sliceArr2); //[ 'React', 'Angular' ]

// ###Array iteration
// forEach(): this method use for array iterate
const arr17 = ['Node', 'React', 'Angular', 'Vue'];
arr17.forEach( item => console.log(item)); // Node \React \Angular \Vue
arr17.forEach((value, index, arr) => console.log(value, index, arr));

// map(): this method use for array iterate
const arr18 = ['Node', 'React', 'Angular', 'Vue', 'React Native', 'Ionic', 'Flutter'];
arr18.map(item => console.log(item));

// Differences between map() and forEach() :: https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/

// filter(): this method use for filter an item from array
const arr19 = [20, 15, 10, 9, 5, 30, 21, 80];
const filterItems = arr19.filter((value, index, arr) => value > 20);
console.log(filterItems); //[ 30, 21, 80 ]




