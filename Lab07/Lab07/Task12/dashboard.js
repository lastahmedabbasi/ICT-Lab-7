const name = localStorage.getItem("studentName");
const roll = localStorage.getItem("rollNumber");

document.getElementById("welcome").innerHTML = "Welcome, " + name + "!";
document.getElementById("roll").innerHTML = "Roll Number: " + roll;
