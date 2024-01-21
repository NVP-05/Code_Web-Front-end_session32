function taoSinhVien(id, name) {
  return { id, name };
}

let soLuongSinhVien = parseInt(prompt("Nhập số lượng sinh viên:"));

let mangSinhVien = [];

for (let i = 1; i <= soLuongSinhVien; i++) {
  let id = prompt("Nhập ID của sinh viên thứ " + i + ":");
  let name = prompt("Nhập tên của sinh viên thứ " + i + ":");

  mangSinhVien.push(taoSinhVien(id, name));
}

console.log("Danh sách sinh viên:");
console.log(mangSinhVien);
