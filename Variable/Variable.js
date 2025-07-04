// 🧠 JavaScript Variables — Complete Explanation
// ✅ What is a Variable?
// A variable is a container for storing data values. JavaScript uses three keywords to declare variables:

// var (old way - avoid using in modern code)

// let (block-scoped, preferred)

// const (block-scoped, can't be reassigned)


// 🔑 Variable Declaration Example
const accountId = "123";
let accountEmail = "Javascript@gmail.com";
var accountPassword = "Javascript";
accountCity = "Indore"; // Implicit global variable (Not recommended)
let accountState;

// 🔁 Re-assigning Variables
// accountId = "098"; ❌ Not allowed — TypeError: Assignment to constant variable

accountEmail = "Python@gmail.com";
accountPassword = "Python";
accountCity = "Bhopal";


// 📋 Output All Variables
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// 📦 Output:

// ┌─────────────┬───────────────────────┐
// │ (index)     │ Values                │
// ├─────────────┼───────────────────────┤
// │ 0           │ '123'                 │
// │ 1           │ 'Python@gmail.com'    │
// │ 2           │ 'Python'              │
// │ 3           │ 'Bhopal'              │
// │ 4           │ undefined             │
// └─────────────┴───────────────────────┘

// ⚠️ Key Points to Remember:
// Keyword	Scope	Reassignable	Redeclarable	Use Case
// var	Function	✅ Yes	✅ Yes	❌ Avoid (hoisting issues)
// let	Block	✅ Yes	❌ No	✅ Preferred for changing values
// const	Block	❌ No	❌ No	✅ Preferred for constants

// ❌ Why Avoid var?
// var is function-scoped, not block-scoped.

// Variables declared with var are hoisted to the top and can cause unexpected results.

Example:

if (true) {
  var a = 10;
}
console.log(a); // ✅ Works, but not ideal


