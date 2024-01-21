let information = {
  id: null,
  name: null,
  phone: null,
  address: null,
};

information.id = prompt("Nhập ID của bạn:");
information.name = prompt("Nhập tên của bạn:");
information.phone = prompt("Nhập số điện thoại của bạn:");
information.address = prompt("Nhập địa chỉ của bạn:");

console.log("Thông tin cá nhân:");
console.log("ID: " + information.id);
console.log("Tên: " + information.name);
console.log("Số điện thoại: " + information.phone);
console.log("Địa chỉ: " + information.address);
