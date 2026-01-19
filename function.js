// function add(a, b) { // we create function with function keyword  and function is a block of code 
//     return a + b;
// }

// console.log(add(10, 20)); // 30

// l

// let square = (x) => x * x;   // shorted way to create function

// console.log(square(5)); // 25
 

// function greet(name) {
//     console.log("Hello " + name);
// }
//                          ////function with parameter and argument 
// greet("Happy");
            

// function sum(a, b) {
//     return a + b;
// }
//                         // if we declare the return keyword thrn immidiatly the function will be terminated at that point 
                    
// let result = sum(10, 5);
// console.log(result); // 15
  

// function greet(name = "User") {   //refers the deault parameters 
//     console.log("Hello " + name);
// }

// greet();
//greet("Happy");
 

// const arr = [400, 500, 100, 12300];

// function secondArray(getaArray) {
//     return getaArray[1];
// }

// console.log(secondArray(arr)); // 500

// const user = {
//     username: "happy",
//     age: 10
// };

// function user3(user4) {
//     console.log(`user name is ${user4.username} and the age is ${user4.age}`);
// }

// user3(user);


function number (...num){
    return num
}
console.log(number(10,20,30,3,404,585));
