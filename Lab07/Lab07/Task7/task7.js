function registerStudent() {
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const dept = document.getElementById("dept").value;
  const sem = document.getElementById("sem").value;

  document.getElementById("output").innerHTML =
    "<h3>Student Information</h3>" +
    "Name: " + name + "<br>" +
    "Roll Number: " + roll + "<br>" +
    "Department: " + dept + "<br>" +
    "Semester: " + sem;
}
