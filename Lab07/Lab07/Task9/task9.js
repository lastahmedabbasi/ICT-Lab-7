function checkEligibility() {
  const name = document.getElementById("name").value;
  const total = Number(document.getElementById("total").value);
  const obtained = Number(document.getElementById("obtained").value);
  const percentage = (obtained / total) * 100;

  let result;
  if (percentage >= 50) {
    result = "Eligible for Admission";
  } else {
    result = "Not Eligible for Admission";
  }

  document.getElementById("output").innerHTML =
    "Student Name: " + name + "<br>" +
    "Percentage: " + percentage.toFixed(2) + "%<br>" +
    "<b>" + result + "</b>";
}
