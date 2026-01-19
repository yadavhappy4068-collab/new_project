// let user = {
//     name: "Happy",
//     age: 22,
//     show: function () {
//         console.log(this.name);
//     }
// };

// user.show(); // Happy


// function demo() {
//     console.log(this);
// }
// demo()
// ;

// let obj = {
//     name: "Happy",
//     show: () => {     //  => that symbol decided the arrow function 
//         console.log(this.name);
//     }    ///arrow functions do not have their own this.
//         //They inherit this from their parent scope.
// };

// obj.show(); // undefined

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let p1 = new Person("Riya", 21);
// // console.log();

// console.log(p1.name);
// console.log(p1.age);


let user1 = { name: "Happy" };
let user2 = { name: "Riya" };

function greet() {
    console.log(this.name);
}

greet.call(user1); // Happy
greet.call(user2); // Riya
