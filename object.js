//### Define a object
// Object literal
const object1 = {"name": "literal", "language":"JavaScript", "founder":"Brendan Eich"}

// Object constructor
const object2 = Object();
object2.name = "Constructor";
object2.language = "JavaScript";
object2.founder = "Brenden Eich";

const object3 = new Object();
object3.name = "Constuctor with new keyword";
object3.language = "Javascript";
object3.founder = "Brenden Eich";

console.log(object1);
console.log(object2);
console.log(object3);


// Access a object properties
console.log(object1.name);
console.log(object1['name']);



// Object keys as a array
const object1Keys = Object.keys(object1);
console.log(object1Keys);

// Object values as a array
const object1Values = Object.values(object1);
console.log(object1Values);

// Object keys exists or not
console.log('name' in object1);

