//Bai tap js 29: Viet chuong trinh nhap vao nam sinh va in ra so tuoi,
//kiem tra dieu kien du lieu nam sinh nhap vao phai la so nguyen, phai lon hon e

function calculateAge(inputYear) {
  //ép kdl truyền vào sang kiểu number
  let yearOfBirth = Number(inputYear);
  console.log(yearOfBirth);
  //kiểm tra a so nguyen, phai lon hon e
  if (!Number.isInteger(yearOfBirth) || yearOfBirth <= 0) {
    alert("Năm sinh ko hợp lệ, năm sinh là số nguyên > 0");
    return; //hàm gặp return thì dừng hàm lại
  }

  //lấy năm hiện tại
  let currentYear = new Date().getFullYear();
  //Tính tuổi
  let age = currentYear - yearOfBirth;
  alert(` Tuổi của bạn là ${age}`);
}

//nhập năm sinh
let year = prompt("Nhập năm sinh");
//gọi hàm
calculateAge(year);
