function placeOrder() {
  const cname = document.getElementById("cname").value;
  const food = document.getElementById("food").value;
  const price = Number(document.getElementById("price").value);
  const qty = Number(document.getElementById("qty").value);
  const total = price * qty;

  let message;
  if (total > 2000) {
    message = "You are eligible for a discount";
  } else {
    message = "No discount available";
  }

  document.getElementById("output").innerHTML =
    "<h3>Order Summary</h3>" +
    "Customer: " + cname + "<br>" +
    "Food Item: " + food + "<br>" +
    "Price: Rs. " + price + "<br>" +
    "Quantity: " + qty + "<br>" +
    "Total: Rs. " + total + "<br>" +
    "<b>" + message + "</b>";
}
