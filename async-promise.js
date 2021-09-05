const placeOrder = new Promise((resolve, reject) => {
    resolve(`Order placed!`);
})

const processOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Order processed!`);
    }, 2000)
})

const completedOrder = new Promise((resolve, reject) => {
    resolve(`Order completed!`);
})

placeOrder.then((res) => {
    console.log(res);
    processOrder.then((res2) => {
        console.log(res2);
        completedOrder.then((res3) => {
            console.log(res3);
        })
    })
}).catch((err) => {
    console.log(err)
})