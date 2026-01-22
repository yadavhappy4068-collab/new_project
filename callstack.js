// function first() {
//     second();
//     console.log("First");
// }

// function second() {     /// call stack follow the LIFO formula that;s last in first out 
//     third(); 
//     console.log("Second");   //it's follow the globe expression and memory management  and it work with thread like single thread aur multi thread
// }
// /*first()
//  └─ second()
//      └─ third()*/


// function third() {
//     console.log("Third");
// }

// first();


// console.log("Start");
// console.log("Middle");
// console.log("End");

function greet() {
    console.log("Hello");
}

console.log("Before");
greet();
console.log("After");
