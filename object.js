//### Define a object
// Object literal
const object1 = {"name": "Literal", "language":"JavaScript", "founder":"Brendan Eich"}

// Object constructor
const object2 = Object();
object2.name = "Constructor";
object2.language = "JavaScript";
object2.founder = "Brenden Eich";

const object3 = new Object();
object3.name = "Constuctor with new keyword";
object3.language = "Javascript";
object3.founder = "Brenden Eich";

console.log(object1); //{"name": "Literal", "language":"JavaScript", "founder":"Brendan Eich"}
console.log(object2); //{"name": "Constructor", "language":"JavaScript", "founder":"Brendan Eich"}
console.log(object3); //{"name": "Constuctor with new keyword", "language":"JavaScript", "founder":"Brendan Eich"}


// Access a object properties
console.log(object1.name); //literal
console.log(object1['name']); //literal

// Object keys as a array
const object1Keys = Object.keys(object1);
console.log(object1Keys); //[ 'name', 'language', 'founder' ]

// Object values as a array
const object1Values = Object.values(object1);
console.log(object1Values); //[ 'Literal', 'JavaScript', 'Brendan Eich' ]

// Object key exists or not
console.log('name' in object1); //true


//### Iterate a object
for(let i in object1){
    console.log(i); //name //language //founder
    console.log(object1[i]) //Literal //JavaScript //Brendan Eich
}

Object.keys(object1).forEach(e => {
    console.log(object1[e]); //Literal //JavaScript //Brendan Eich
})

