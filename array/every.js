// every(): This is an array method and use for return true or false for ||match all array values|| with condition
const numbers = [5, 8, 4, 42, 35, 62, 1];

// This method has three parameters value, index and array and return true or false for ||match all array values|| with condition
const allOver5 = numbers.every( (value, index, array) => 
    value > 5
);
console.log(allOver5); // false

/*
====================
Working process with traditional loop
====================
*/
function everyWorking(array, cb){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        if(cb(array[i], i, array)){
            newArr.push(array[i])
        }
    }
    if(newArr.length == array.length){
        return true
    }else{
        return false
    }
}

const allOver5Working = everyWorking(numbers, (value, index, array) => 
    value > 5
);

console.log(allOver5Working); // false
console.log(numbers); // [ 5,  8, 4, 42, 35, 62, 1]
