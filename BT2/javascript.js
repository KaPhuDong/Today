var id = 0;
var total = 0;
function addFunction() {
  id++;
  var name = document.querySelector("#pn").value;
  var quantity = document.querySelector("#pq").value;
  var price = document.querySelector("#pp").value;
  var subTotal = quantity * price;
  total += subTotal;
  var row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + name + "</td>";
  row += "<td>" + quantity + "</td>";
  row += "<td>" + price + "</td>";
  row += "<td>" + subTotal + "</td>";
  row += "</tr>";
  document.querySelector("#tb").innerHTML += row;
  document.querySelector("#total").innerHTML = total;
}
