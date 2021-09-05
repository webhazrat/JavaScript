// callback process
const placeOrder = (customer, callback) => {
    console.log(`Order placed for ${customer}`);
    callback(customer);
}

const processOrder = (customer, callback)=> {
    setTimeout(() => {
        console.log(`Order processed for ${customer}`);
        callback(customer);
    }, 2000)
}

const completedOrder = (customer) => {
    console.log(`Order completed served for ${customer}`);
}

placeOrder(`Md Hazrat Ali`, (customer)=> {
    processOrder(customer, (customer) => {
        completedOrder(customer);
    });
});

 
