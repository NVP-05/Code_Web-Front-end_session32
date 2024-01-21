function taoSach(tacGia, tenSach) {
  return { author: tacGia, name: tenSach };
}

let danhSachSach = [
  taoSach("cuong", "codeC"),
  taoSach("an", "codeJS"),
  taoSach("phu", "IT"),
];

let tenTacGia = prompt("Nhập tên tác giả:");

let sachTimDuoc = danhSachSach.find((sach) => sach.author === tenTacGia);

if (sachTimDuoc) {
  console.log("Thông tin sách của tác giả " + tenTacGia + ":");
  console.log("Tác giả: " + sachTimDuoc.author);
  console.log("Tên sách: " + sachTimDuoc.name);
} else {
  console.log("Không tìm thấy sách của tác giả " + tenTacGia);
}
