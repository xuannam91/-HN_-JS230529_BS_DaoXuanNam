//Bài 3 : Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó.

let inputMonth = +prompt("Nhập tháng");
let inputYear = +prompt("Nhập năm");

switch (inputMonth) {
  case 1:
    console.log("thang" + inputMonth + " co 31 ngay");
    break;
  case 2:
    if (inputYear % 400 == 0 || (inputYear % 4 == 0 && inputYear % 100 != 0))
      console.log("thang " + inputMonth + " có 29 ngay");
    else console.log("thang " + inputMonth + " có 28 ngày");
    break;

  case 3:
    console.log("thang" + inputMonth + " co 31 ngay");
    break;
  case 4:
    console.log('thang' + inputMonth     +' co 30 ngay');
    break;
  case 5:
    console.log("thang" + inputMonth + " co 31 ngay");
    break;
  case 6:
    console.log('thang' + inputMonth     +' co 30 ngay');
    break;
  case 7:
    console.log("thang" + inputMonth + " co 31 ngay");
    break;
  case 8:
    console.log("thang" + inputMonth + " co 31 ngay");
    break;
  case 9:
    console.log('thang' + inputMonth     +' co 30 ngay');
    break;
  case 10:
    console.log("thang" + inputMonth + " co 31 ngay");
    break;
  case 11:
    console.log('thang' + inputMonth     +' co 30 ngay');
    break;
  case 12:
    console.log("thang" + inputMonth + " co 31 ngay");
    break;

  default:
    break;
}

