function login() {
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;

  localStorage.setItem("studentName", name);
  localStorage.setItem("rollNumber", roll);

  window.location.href = "dashboard.html";
}
