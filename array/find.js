// find(): This is an array method to find a value from array and return this

const arr = [
    {id:1, name: 'Node', type:'Runtime'}, 
    {id:2, name: 'React', type:'Framework'},
    {id:3, name: 'Angular', type:'Framework'},
    {id:4, name: 'Ionic', type:'Cross Platform'},
    {id:5, name: 'React Native', type:'Cross Platform'}
]

const result = arr.find((value, index, obj) => {
    return value.id === 3
})
console.log(result); // {id:3, name: 'Angular', type:'Framework'}

const indexResult = arr.findIndex((value, index, obj) => {
    return value.id === 3
})
console.log(indexResult); // 2

/*
==================
Working process
==================
*/
function findWorking(arr, cb){
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
}

const findWorkingResult = findWorking(arr, (value) => {
    return value.id === 3
})

console.log(findWorkingResult);