// let nums = [1, 2, 3, 4];

// let result = nums.map(n => n * 2);

// console.log(result);

// let nums = [2, 3, 4];

// let squares = nums.map(n => n * n);

// console.log(squares);

// let students = [
//   { name: "Happy", age: 20 },
//   { name: "Riya", age: 21 }
// ];

// let names = students.map(s => s.name);
// let names1 = students.map(s => s.age);

// console.log(names);
// console.log(names1);


// let words = ["js", "java", "html"];

// let upper = words.map(w => w.toUpperCase());

// console.log(upper);


// let nums = [1, 2, 3, 4, 5, 6];

// let even = nums.filter(n => n % 2 === 0);

// console.log(even);

// let marks = [35, 60, 80, 45, 90];

// let passed = marks.filter(m => m > 50);

// console.log(passed);


// let users = [
//   { name: "Happy", age: 20 },
//   { name: "Riya", age: 17 }
// ];

// let adults = users.filter(u => u.age >= 18);

// console.log(adults);


// let data = ["JS", "", "HTML", "", "CSS"];

// let clean = data.filter(item => item !== "");

// console.log(clean);

// let nums = [10, 20, 30];

// let sum = nums.reduce((total, n) => total + n, 0);   // add all numbers with the help of total and n 

// console.log(sum);
// let nums = [10, 20, 30];

// let product = nums.reduce((mul, n) => mul * n, 1);   // multiply all numbers with the help of total and n 

// console.log(product);


// let nums = [10, 5, 30, 20];

// let max = nums.reduce((a, b) => a > b ? a : b);

// console.log(max);

let people = [
  { age: 20 },
  { age: 25 },
  { age: 30 }
];

let totalAge = people.reduce((sum, p) => sum + p.age, 0);
 
console.log(totalAge);

