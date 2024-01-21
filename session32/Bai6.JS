function taoSanPham(id, tenSanPham, gia) {
  return { id, product_name: tenSanPham, price: gia };
}
let products = [
  taoSanPham(1, "Nước lọc", 300),
  taoSanPham(2, "Nước ngọt", 200),
  taoSanPham(3, "Nước thánh", 100),
];
function sapXepTheoGiaTangDan(arr) {
  return arr.slice().sort((a, b) => a.price - b.price);
}
let productsSapXep = sapXepTheoGiaTangDan(products);
console.log("Danh sách sản phẩm sau khi sắp xếp theo giá tăng dần:");
console.log(productsSapXep);
