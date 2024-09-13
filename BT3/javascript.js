var id = 0;
var total = 0;
function add() {
  id++;
  var pn = document.querySelector("#pn").value;
  var pq = document.querySelector("#pq").value;
  var pp = document.querySelector("#pp").value;
  var subTotal = pq * pp;
  total += subTotal;
  var row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + pn + "</td>";
  row += "<td>" + pq + "</td>";
  row += "<td>" + pp + "</td>";
  row += "<td>" + subTotal + "</td>";
  row += "</tr>";
  document.querySelector("#tbd").innerHTML += row;
  document.querySelector("#total").innerHTML = total;
}
