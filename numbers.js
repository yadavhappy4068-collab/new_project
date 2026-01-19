// let number1 = new Number(100)
// console.log(number1)
// let number2 = 4000
// console.log(number2)
// // there are many type of number thats we will be define in that progranm well defines 
// // the method is following like that --
// // .MAX , .MIN , toString , .toPricision ,toLocalString  
// console.log(Math.max(1,2,3,4))
// console.log(Math.min(1,2,3,4))
// console.log(Math.ceil(1.2))
// console.log(Math.floor(4.6))
// Number("10")      // 10
// Number(true)      // 1
// Number(false)     // 0


// ===== Number() Conversion =====
console.log(Number("10"));        // 10
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number("10.5"));      // 10.5

// ===== parseInt & parseFloat =====
console.log(Number.parseInt("10.99"));     // 10
console.log(Number.parseInt("101", 2));    // 5
console.log(Number.parseFloat("10.75"));   // 10.75

// ===== Checking Numbers =====
console.log(Number.isInteger(20));     // true
console.log(Number.isInteger(20.5));   // false

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN("10"));       // false

console.log(Number.isFinite(100));     // true
console.log(Number.isFinite(Infinity));// false

// ===== Number Properties =====
console.log(Number.MAX_VALUE);         // Largest number
console.log(Number.MIN_VALUE);         // Smallest positive number
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);               // NaN

// ===== Number Object Methods =====
let x = 123.456;

console.log(x.toString());        // "123.456"
console.log(x.toString(2));       // Binary value
console.log(x.toFixed(2));        // "123.46"
console.log(x.toPrecision(4));    // "123.5"
console.log(x.toExponential());   // "1.23456e+2"

console.log(x.toString())
console.log(x.toFixed())
console.log(x.toString(2))
console.log(x.toPrecision(4))
console.log(x.toExponential())

let y = new Number(50);
console.log(y.valueOf());         // 50

// ===== Math Methods =====
console.log(Math.max(1, 2, 3, 4));   // 4
console.log(Math.min(1, 2, 3, 4));   // 1
console.log(Math.round(4.6));        // 5
console.log(Math.ceil(4.1));         // 5
console.log(Math.floor(4.9));        // 4
console.log(Math.trunc(4.9));        // 4
console.log(Math.sqrt(16));           // 4
console.log(Math.pow(2, 3));          // 8
console.log(Math.abs(-10));           // 10
console.log(Math.random());           // 0 to 1
