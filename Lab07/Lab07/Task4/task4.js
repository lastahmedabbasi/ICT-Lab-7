const student = {
  name: "Ali",
  rollNo: "25K-1234",
  marks: [80, 75, 90]
};

console.log("Name (dot):", student.name);
console.log("Roll No (bracket):", student["rollNo"]);

const key = "rollNo";
console.log("Roll No (using key variable):", student[key]);

student.marks[1] = 85;          // change 2nd subject
student.grade = "A";            // new property
console.log(student);

try {
  student = { name: "Sara", rollNo: "25K-9999", marks: [1, 2, 3] };
} catch (e) {
  console.log(e.name + ": " + e.message);
}
// ERROR: TypeError: Assignment to constant variable.
// EXPLANATION: const stops the variable from being pointed at a different value
// (reassignment), but the object it points to is still stored in memory and its
// contents (properties) can be modified. The address stays the same, the data inside changes.
