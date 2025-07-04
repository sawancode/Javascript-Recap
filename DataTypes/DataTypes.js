// 📌 JavaScript Basics & Data Types – Notes

"use strict"; // Enforces modern JS rules, catches common errors


// 🔔 Alert Usage
// alert(3 + 3); 
// Alerts work in browsers, not in Node.js

// 🖨️ Console Example
console.log("JavaScript");
console.log(3 + 3); // Keep code clean and readable

console.log(3 
    + 3
) // Code readablity should be high.


// 🎯 Variable Declaration & Types

let name = "JavaScript";  // string
let age = 28;             // number
let isLoggedIn = true;    // boolean
let state;                // undefined



// 📚 JavaScript Data Types
// Type	Description	Example
// number	Represents both integers & decimals	let score = 95.5;
// bigint	For very large integers beyond the safe limit of Number	let bigNum = 12345678901234567890n;
// string	Text enclosed in " " or ' '	let lang = "JavaScript";
// boolean	Logical true or false	let isAdmin = false;
// null	Represents intentional absence of value	let test = null;
// undefined	Variable declared but not assigned	let a; // a is undefined
// symbol	Unique value, often used as object keys	let id = Symbol("userID");
// object	Collection of key-value pairs	let user = { name: "Sawan", age: 25 };

//DateTypes:

// number = 2 to the power 15 this is the range.
// bigint
// string => ""
// boolean => true & false
// null => standalone value and also the datatype
// undefined => 
// symbol => unique

// object

// 🔍 Special Cases

console.log(typeof null);        // object (this is a known JavaScript bug/quirk)
console.log(typeof undefined);   // undefined

