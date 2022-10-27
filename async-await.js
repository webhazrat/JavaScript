// how to creat a promise Promise(callback)


// let payment = true

// const promise = new Promise(function(resolve, reject){
//     if(payment){
//         resolve('Success')
//     }else{
//         reject('Payment failed')
//     }
// })

// promise.then(function(res){
//     console.log(res)
// }).catch(function(err){
//     console.log(err)
// })



// const promise2 = Promise.resolve('Resolved')
// const promise3 = Promise.reject('Resolved')
// console.log(promise2)




// const first = Promise.resolve('Md')

// function second(namePart){
//     let first = false
//     return new Promise((resolve, reject) => {
//         if(first){
//             setTimeout(()=>{
//                 resolve(`${namePart} Hazrat`)
//             }, 3000)
//         }else{
//             reject('Second not Done')
//         }
//     })
// }

// function third(namePart) {
//     return Promise.resolve(`${namePart} Ali`)
// }

// first.then(second).then(third).then((value) => {
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
// })


// const first = Promise.resolve('First')

// function second(){
//     let first = true
//     return new Promise((resolve, reject) => {
//         if(first){
//             setTimeout(()=>{
//                 resolve(`Second`)
//             }, 3000)
//         }else{
//             reject('Second not Done')
//         }
//     })
// }

// function third() {
//     return Promise.resolve(`Third`)
// }


// Promise.all([first, second(), third()]).then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//     console.log(err)
// })



// const first = Promise.resolve('Md')

// function second(namePart){
//     let first = false
//     return new Promise((resolve, reject) => {
//         if(first){
//             setTimeout(()=>{
//                 resolve(`${namePart} Hazrat`)
//             }, 3000)
//         }else{
//             reject('Second not Done')
//         }
//     })
// }

// function third(namePart) {
//     return Promise.resolve(`${namePart} Ali`)
// }

// async function promiseExecution(){
//     try{
//         const firstValue = await first;
//         const secondValue = await second(firstValue)
//         const thirdValue = await third(secondValue)

//         console.log(thirdValue)
//     }catch(err){
//         console.log(err)
//     }
// }

// promiseExecution()



async function first() {
    return 'Md'
}

function second(namePart) {
    let first = true
    return new Promise((resolve, reject) => {
        if (first) {
            setTimeout(() => {
                resolve(`${namePart} Hazrat`)
            }, 3000)
        } else {
            reject('Second not Done')
        }
    })
    
}

async function third(namePart) {
    return `${namePart} Ali`
}

async function promiseExecution() {
    try {
        const firstValue = await first();
        const secondValue = await second(firstValue)
        const thirdValue = await third(secondValue)
        console.log(thirdValue)
    } catch (err) {
        console.log(err)
    }
}
promiseExecution()





console.log('Async Check')

