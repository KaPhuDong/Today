var id = 0;
function sellFunction() {
  id++;
  var productName = document.querySelector("#productName").value;
  var quantity = document.querySelector("#quantity").value;
  var unitPrice = document.querySelector("#unitPrice").value;
  var discount = document.querySelector("#discount").value;
  var subtotal = quantity * unitPrice * (1 - discount / 100);
  var row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + productName + "</td>";
  row += "<td>" + quantity + "</td>";
  row += "<td>" + unitPrice + "</td>";
  row += "<td>" + discount + "</td>";
  row += "<td>" + "$" + subtotal + "</td>";
  row += "</tr>";
  document.querySelector("#tb").innerHTML += row;

  document.querySelector("#productName").value = "";
  document.querySelector("#quantity").value = "";
  document.querySelector("#unitPrice").value = "";
  document.querySelector("#discount").value = "";
}
