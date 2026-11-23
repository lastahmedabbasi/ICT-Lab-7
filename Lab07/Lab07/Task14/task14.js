function issueBook() {
  const sname = document.getElementById("sname").value;
  const title = document.getElementById("title").value;
  const bid = document.getElementById("bid").value;
  const days = Number(document.getElementById("days").value);

  let message;
  if (days > 14) {
    message = "Please return the book on time";
  } else {
    message = "Book issued successfully";
  }

  document.getElementById("output").innerHTML =
    "<h3>" + message + "</h3>" +
    "Student Name: " + sname + "<br>" +
    "Book Title: " + title + "<br>" +
    "Book ID: " + bid + "<br>" +
    "Number of Days: " + days;
}
