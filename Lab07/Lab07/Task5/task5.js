let cart = ["Shoes", "Shirt", "Cap"];
let backup = cart;
backup.push("Watch");
console.log("cart:", cart);        // ["Shoes","Shirt","Cap","Watch"]
console.log("backup:", backup);    // same array

let a = 10;
let b = a;
b = 50;
console.log("a =", a, "| b =", b); // a = 10 | b = 50

/* EXPLANATION:
   Arrays are a reference type: the variable stores only the address of the array
   in memory, so "let backup = cart" copies the address and both names point to
   the same memory location; pushing through backup changes cart too.
   Numbers are a primitive type: the actual value is stored in the variable, so
   "let b = a" makes a separate copy in its own memory location and changing b
   does not affect a. */

// Real independent copy using spread operator
let cart2 = ["Shoes", "Shirt", "Cap"];
let backup2 = [...cart2];
backup2.push("Watch");
console.log("cart2:", cart2);      // ["Shoes","Shirt","Cap"]
console.log("backup2:", backup2);  // ["Shoes","Shirt","Cap","Watch"]
