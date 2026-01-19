//  Creating an Array
// Definition
// An array can be created using array literal or Array constructor.
//Program
// Array literal
// let arr1 = [10, 20, 30, 40];

// // Array constructor
// let arr2 = new Array(5, 10, 15);

// console.log(arr1);
// console.log(arr2);
// An Array Constructor creates an array using the new Array() keyword.
// It can create an empty array, an array with given elements, or an array with a specific length.
//Array is pre-Sizing the size of Array doee not defines

// let arr = ["Apple", "Banana", "Mango"];

// console.log(arr[0]); // Apple
// console.log(arr[2]); // Mango     Accessing Array with index formate 



// let arr = [10, 20, 30];
// arr[1] = 50;                Modify Array with = keyword   and we can defind the Array element with Triple === keyword
// like that arr[0]===arr[1]

// console.log(arr); // [10, 50, 30]

// if any element to push in the array then we use push keyword 

// make pop keeyword to remove the element form the the list if  you use the pop keyword then remove the last one keyword from list 

// let arr = [1, 2, 3, 4];
// console.log(arr.length); // 4

// let arr = [10, 20];

// arr.push(30);      // Add at end
// arr.unshift(5);   // Add at beginning usign the unshift keyword to adding the element form the beginning 

// console.log(arr); // [5, 10, 20, 30]
// let arr = [5, 10, 20, 30];

// arr.pop();    // Removes last
// arr.shift(); // Removes first    remove the first element form the Arraylist 

// console.log(arr); // [10, 20]    


// let arr = [10, 20, 30];    //finding the index of element then we can use .indexOf() method 
// console.log(arr.indexOf(20)); // 1
// console.log(arr.includes(30)); // true   // checking the element is present in this list or not if present then it snend true if not the send flas 


// let arr = [1, 2, 3, 4];
// console.log(arr.slice(1, 3)); // [2, 3]


// let arr1 = [1, 2, 3, 4];
// arr.splice(2, 1, 99);

// console.log(arr1); // [1, 2, 99, 4]


