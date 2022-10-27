// some(): This is an array method and use for return true or false for ||match some array values|| with condition
const numbers = [7, 3, 15, 3, 13, 2, 3];

// This method has three parameters value, index and array and return true or false for ||match some array values|| with condition
let someOver5 = numbers.some((value, index, array) => 
    value > 5
)
console.log(someOver5) // true

/*
====================
Working process with traditional loop
====================
*/
function someOver5Func(array, cb){
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
      if (cb(array[i], i, array)) {
        newArr.push(array[i]);
      }
    }

    if(newArr.length > 0 ){
        return true 
    }else{
        return false 
    }
}


let someOver5Working = someOver5Func(numbers, (value, index, array) => 
    value > 5
)

console.log(someOver5Working);
