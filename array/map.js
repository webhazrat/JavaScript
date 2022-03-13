// map(): This is an array method and use for iteration an array and return new array
const technologies = ['Node', 'React', 'Angular', 'Ionic', 'React Native'];

// This method has three parameters value, index and array 
technologies.map( (value, index, array) => 
    console.log(value, index, array)
);

// This method create and return new array with modification
const technology = technologies.map( value => 
    value+' JS'
);
console.log(technology); // [ 'Node JS', 'React JS', 'Angular JS', 'Ionic JS', 'React Native JS' ]
console.log(technologies); // ['Node', 'React', 'Angular', 'Ionic', 'React Native']

/*
====================
Working process with traditional loop
====================
*/
function mapWorking(array, cb){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        let temp = cb(array[i], i, array)
        newArr.push(temp);
    }
    return newArr;
}

const technologyWorking = mapWorking(technologies, (value, index, array) => 
    value + ' JS'
);

console.log(technologyWorking); // [ 'Node JS', 'React JS', 'Angular JS', 'Ionic JS', 'React Native JS' ]
console.log(technologies); // [ 'Node', 'React', 'Angular', 'Ionic', 'React Native' ]
