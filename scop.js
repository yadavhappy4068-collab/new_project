// let x = 10;   // Global variable

// function show() {
//     console.log(x);
// }

// show();
// console.log(x);


// function demo() {
//     let y = 20;  // Function scope
//     console.log(y);
// }

// demo();
// console.log(y); // Error

// if (true) {
//     let a = 10;
//     const b = 20;
//     console.log(a, b);
// }

// console.log(a, b); // Error


// if (true) {
//     var c = 30;   //var is silli data type and we can access out side of scop
// }
// console.log(c); // Works


// function outer() {
//     let msg = "Hello";

//     function inner() {
//         console.log(msg);
//     }

//     inner();
// }
// // inner()
// outer();

function happy(){
    let mess = "hii i am happy yadav"

    function yadav(){
        console.log(mess);
        

    }
    yadav()
}
happy()