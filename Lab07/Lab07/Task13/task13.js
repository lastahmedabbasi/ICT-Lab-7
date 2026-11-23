function calculateSalary() {
  const ename = document.getElementById("ename").value;
  const basic = Number(document.getElementById("basic").value);
  const allowance = Number(document.getElementById("allowance").value);
  const gross = basic + allowance;

  let category;
  if (gross > 50000) {
    category = "High Salary Category";
  } else {
    category = "Normal Salary Category";
  }

  document.getElementById("output").innerHTML =
    "Employee Name: " + ename + "<br>" +
    "Basic Salary: Rs. " + basic + "<br>" +
    "Allowance: Rs. " + allowance + "<br>" +
    "Gross Salary: Rs. " + gross + "<br>" +
    "<b>" + category + "</b>";
}
