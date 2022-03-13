// forEach(): This is an array method and use for array iteration
const technologies = ['Node', 'React', 'Angular', 'Ionic', 'React Native'];

// This method has three parameters value, index and array 
technologies.forEach( (value, index, array) => 
    console.log(value, index, array)
);

// This method can't return anything and can't modify existing array or create new array
const technology = technologies.forEach( value => 
    value
);
console.log(technology); // undefined
console.log(technologies); // ['Node', 'React', 'Angular', 'Ionic', 'React Native']

/*
====================
Working process with traditional loop
====================
*/
function forEachWorking(array, cb){
    for(let i = 0; i < array.length; i++){
        cb(array[i], i, array)
    }
}

forEachWorking(technologies, (value, index, array) => 
    console.log(value, index, array)
);



