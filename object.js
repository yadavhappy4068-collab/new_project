// let student = {   // creating object with the help of litrels    and adding functions with help of key 
//     name: "Happy",
//     age: 22,
//     course: "BCA",
//     greet: function () {
//         console.log("Hello");
//     }
// };

// console.log(student.name); // Happy
// console.log(student); 


// student.greet();


// let car = new Object();  // creating object with the help of new keyword 
// car.brand = "BMW";
// car.price = 5000000;

// console.log(car.brand);


// function Person(name, age) {
//     this.name = name;          //using constructor method to create the object 
//     this.age = age;
// }

// let p1 = new Person("Riya", 21);
// console.log(p1.name);
// console.log(p1.age);



let student = {
    name: "Happy",
    age: 22,
    course: "BCA",
    greet: function () {
        console.log("Hello");
    }
};

// console.log(student.name); // Happy
// student.greet();


// console.log(student.age);      // Dot notation
// console.log(student["course"]); // Bracket notation

student.age = 23;
student.city = "Delhi";   // modify the the code witth the help of . and =

// console.log(student);

// console.log(Object.keys(student));  // Output: ["name", "age", "course", "city"]
// console.log(Object.values(student)); // output : [ 'Happy', 23, 'BCA', [Function: greet], 'Delhi' ]

//   for (let key in student) {
//     console.log(key + " : " + student[key]);  
// }

// name : Happy
// age : 23
// course : BCA
// greet : function () {
//         console.log("Hello");
//     }
// city : Delhi
                                  
Object.entries(student).forEach(([key, value]) => {
    console.log(key + " = " + value);
});

// name = Happy
// age = 23
// course = BCA
// greet = function () {
//         console.log("Hello");
//     }
// city = Delhi