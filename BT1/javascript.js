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
  row += "<td>" + subtotal + "</td>";
  row += "</tr>";
  document.querySelector("#tb").innerHTML += row;

  document.querySelector("#productName").value = "";
  document.querySelector("#quantity").value = "";
  document.querySelector("#unitPrice").value = "";
  document.querySelector("#discount").value = "";
}

function cancelFunction() {
  // document.querySelector("#productName").value = "";
  // document.querySelector("#quantity").value = "";
  // document.querySelector("#unitPrice").value = "";
  // document.querySelector("#discount").value = "";
  // // Xóa tất cả các hàng trong bảng (trừ hàng tiêu đề)
  // var table = document.querySelector("#tb");
  // var rowCount = table.rows.length;
  // // Lặp qua bảng và xóa các hàng từ dưới lên để tránh lỗi index
  // for (var i = rowCount - 1; i > 0; i--) {
  //   table.deleteRow(i);
  // }
  // // Đặt lại ID về 0
  // id = 0;
}
