let city = "Karachi";
let age = 18;
let bigNumber = 9007199254740993n;
let isHosteller = false;
let middleName;            // undefined (no value assigned)
let spouse = null;         // intentionally empty
let id = Symbol("studentId");

console.log("city = " + city + " | type = " + typeof city);
console.log("age = " + age + " | type = " + typeof age);
console.log("bigNumber = " + bigNumber + " | type = " + typeof bigNumber);
console.log("isHosteller = " + isHosteller + " | type = " + typeof isHosteller);
console.log("middleName = " + middleName + " | type = " + typeof middleName);
console.log("spouse = " + spouse + " | type = " + typeof spouse);
console.log("id = " + id.toString() + " | type = " + typeof id);

// OBSERVATION: typeof null prints "object" instead of "null".
// This is a well-known bug from the first version of JavaScript that was never
// fixed to avoid breaking old websites. null is actually a primitive type.
