// // Current date and time
// let now = new Date();
// console.log(now);

// // Specific date (year, month, day)
// let d1 = new Date(2024, 0, 15); // Month starts from 0
// console.log(d1);

// // Date using string
// let d2 = new Date("2024-01-15");
// console.log(d2);

// // Date using milliseconds
// let d3 = new Date(0);
// console.log(d3);
// let d = new Date();

// console.log(d.getFullYear());   // Returns year
// console.log(d.getMonth());      // Returns month (0–11)
// console.log(d.getDate());       // Returns day of month
// console.log(d.getDay());        // Returns weekday (0–6)

// console.log(d.getHours());      // Returns hours
// console.log(d.getMinutes());    // Returns minutes
// console.log(d.getSeconds());    // Returns seconds

let d = new Date();

d.setFullYear(2026);
d.setMonth(5);   // June
d.setDate(15);
d.setHours(10);

console.log(d);
