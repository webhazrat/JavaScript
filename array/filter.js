// filter(): This is an array method and use for return a new array with condition
const numbers = [5, 8, 4, 42, 35, 62, 1];

// This method has three parameters value, index and array and condition if true return new array
const oddNumbers = numbers.filter( (value, index, array) => 
    value%2 === 1
);
console.log(oddNumbers); // [ 5, 35, 1 ]

/*
====================
Working process with traditional loop
====================
*/
function filterWorking(array, cb){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(cb(array[i], i, array)){
            newArr.push(array[i]);
        } 
    }
    return newArr;
}

const oddNumbersWorking = filterWorking(numbers, (value, index, array) => 
    value % 2 === 1
);

console.log(oddNumbersWorking); // [ 5, 35, 1 ]
console.log(numbers); // [ 5,  8, 4, 42, 35, 62, 1]
