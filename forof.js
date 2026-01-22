// for (variable of iterable) {
//     // code to execute        for loop is a combination of all loop that's describe one line code

// }


// let name = "Happy";

// for (let ch of name) {
//     console.log(`Hi, this is one letter of my name: ${ch}');
// }

// let myMap = new Map();

// myMap.set("name", "Happy");
// myMap.set("age", 21);
// myMap.set("course", "JavaScript");
// myMap.set("course", "JavaScript"); //duplicates are not allow 

// for (let [key, value] of myMap) {
//     console.log(key, ":", value);
// }
// for (let [key, value] of myMap.entries()) {
//     console.log(`${key} => ${value}`);
// }

// for (let key of myMap.keys()) {
//     console.log(key);              it refers only key pairs of in list 
// }

// for (let value of myMap.values()) {
//     console.log(value);             // it refers the value of list
// }

let mySet = new Set([1, 2, 3, 3]);

// for (let value of set) {
//     console.log(value);   sets also does not follow the duplicate in java script 
// }
// for (let value of mySet.values()) {
//     console.log(value);
// }

// for (let key of mySet.keys()) {
//     console.log(key);                  //in set key and value are same 
// }

// for (let [key, value] of mySet.entries()) {
//     console.log(key, value);
// }


// mySet.add(50);

// for (let value of mySet) {
//     console.log(value);
// }
// mySet.delete(20);

// for (let value of mySet) {
//     console.log(value);
// }
// mySet.clear();

// for (let value of mySet) {
//     console.log(value); // nothing printed
// }

// for (let value of mySet) {
//     if (mySet.has(value)) {
//         console.log(value);
//     }
// }
