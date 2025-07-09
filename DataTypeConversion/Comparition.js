// 🔍 JavaScript Comparison Operators Explained (with Surprising Results!)

// Basic Comparison Operators
console.log(1 > 0);      // true
console.log(1 >= 0);     // true
console.log(0 < 1);      // true
console.log(0 <= 1);     // true
console.log(1 == 0);     // false
console.log(1 != 0);     // true

// Type Coercion in Comparisons
console.log("2" > 1);    // true — "2" is coerced to number 2
console.log("02" > 1);   // true — "02" is coerced to number 2

// The tricky 'null' behavior
console.log(null > 0);   // false
console.log(null == 0);  // false — null is only loosely equal to undefined
console.log(null >= 0);  // true — null is coerced to 0 for >= and <=

// The weird 'undefined' behavior
console.log(undefined > 0);   // false
console.log(undefined >= 0);  // false
console.log(undefined < 0);   // false — any numeric comparison with undefined is false

// Strict Equality (===) - No Type Coercion
console.log("2" === 2);  // false — different data types (string vs number)
// 📌 Key Takeaways:
// == performs type coercion, === does not.

// null and undefined behave strangely in comparisons — be cautious!

// Always use === unless you really want type coercion.

