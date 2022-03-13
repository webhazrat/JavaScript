// reduce(): This is an array method to operation with prev and current value

const arr = [12, 10, 9, 8, 65];

const sum = arr.reduce((prev, curr, index, array) => {
    return prev+curr;
}, 0)

const max = arr.reduce((prev, curr, index, array) => {
    return Math.max(prev, curr);
}, 0)

const min = arr.reduce((prev, curr, index, array) => {
    return Math.min(prev, curr);
}, arr[0])

console.log(sum, max, min);

/*
=====================
Working process with traditional loop
=====================
*/
function reduceWorking(arr, cb, accumulator){
    for(let i = 0; i < arr.length; i++){
        accumulator = cb(accumulator, arr[i])
    }
    return accumulator;
}

const sumWorking = reduceWorking(arr, (prev, curr, index, array) => {
    return prev+curr;
}, 0);
const maxWorking = reduceWorking(arr, (prev, curr, index, array) => {
    return Math.max(prev, curr);
}, 0);
const minWorking = reduceWorking(arr, (prev, curr, index, array) => {
    return Math.min(prev, curr);
}, arr[0]);

console.log(sumWorking, maxWorking, minWorking);
