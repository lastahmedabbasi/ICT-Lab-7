function checkScope() {
  if (true) {
    var x = "I am var";
    let y = "I am let";
  }
  // PREDICTION: x prints "I am var", y throws ReferenceError
  // ACTUAL: x -> "I am var", y -> ReferenceError: y is not defined
  console.log("x =", x);
  try {
    console.log("y =", y);
  } catch (e) {
    console.log("y error:", e.name + ": " + e.message);
  }
}
checkScope();

// ---- Part 2: using var before declaration ----
// PREDICTION: undefined (declaration is hoisted, value is not)
// ACTUAL: undefined
console.log("a =", a);
var a = 5;

// ---- Part 3: using let before declaration ----
// PREDICTION: ReferenceError (Cannot access 'b' before initialization)
// ACTUAL: ReferenceError: Cannot access 'b' before initialization
try {
  console.log("b =", b);
} catch (e) {
  console.log("b error:", e.name + ": " + e.message);
}
let b = 5;

/* EXPLANATION:
   var is function scoped, so x escaped the if block and was visible anywhere in
   the function, while let is block scoped, so y only existed inside the { }.
   Hoisting moves both declarations to the top, but var is initialised as
   undefined straight away, whereas let stays uninitialised until its line runs, 
   which is why it throws an error. 
*/
