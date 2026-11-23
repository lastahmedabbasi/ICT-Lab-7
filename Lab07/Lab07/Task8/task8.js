function calculateBill() {
  const product = document.getElementById("product").value;
  const price = Number(document.getElementById("price").value);
  const qty = Number(document.getElementById("qty").value);
  const total = price * qty;

  document.getElementById("output").innerHTML =
    "<h3>Bill</h3>" +
    "Product: " + product + "<br>" +
    "Price: Rs. " + price + "<br>" +
    "Quantity: " + qty + "<br>" +
    "Total Bill: Rs. " + total;
}
