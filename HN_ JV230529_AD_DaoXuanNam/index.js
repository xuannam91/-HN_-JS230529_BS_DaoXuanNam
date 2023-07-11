let tableBody = document.querySelector(".table-body");
let btnAddStudent = document.querySelector(".btn");
let elementTable = document.querySelector(".styled-table");

let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputPhone = document.querySelector("#numberphone");
let inputAddress = document.querySelector("#address");

let searchInput = document.querySelector(".input-search");
let btnSearch = document.querySelector(".btn-search");

let elementSort = document.querySelector(".btn-sort");




let students = [
  {
    id: 1,
    name: "Tú",
    email: "vietduc@gmail.com",
    phone: "2345668123",
    address: "Hà Nội",
    gender: "Nam",
  },
  {
    id: 2,
    name: "xuân nam",
    email: "xuannam@gmail.com",
    phone: "2345668123",
    address: "Thanh hoa",
    gender: "Nữ",
  },
  {
    id: 3,
    name: "an",
    email: "xuannam@gmail.com",
    phone: "2345668123",
    address: "Hải Phòng",
    gender: "Nam",
  },
  {
    id: 4,
    name: "xuân phương",
    email: "xuanphuong@gmail.com",
    phone: "2345668123",
    address: "Thanh hoa",
    gender: "Nữ",
  },
];




// render học viên.

function showStudent() {
  let result = "";
  for (let i = 0; i < students.length; i++) {
    result =
      result +
      `<tr>
          <td>${i + 1}</td>
          <td>${students[i].name}</td>
          <td>${students[i].email}</td>
          <td>${students[i].phone}</td>
          <td>${students[i].address}</td>
          <td>${students[i].gender}</td>
          <td class=>
              <button type="button" data-id="${
                students[i].id
              }" class="btn edit">EDit</button>
              <button type="button" data-id="${
                students[i].id
              }" class="btn delete">Delete</button>
          </td>
      </tr>`;
  }
  tableBody.innerHTML = result;
}
showStudent();




//  Thêm sinh viên và update

function handleAdd(event) {
  let valueGender = document.querySelector(".gender:checked");
  console.log(valueGender);

  let testEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (inputName.value === "" || inputAddress.value === "") {
    alert("Yêu cầu nhập đầy đủ");
    return;
  }
  if (!testEmail.test(inputEmail.value)) {
    alert("Yêu cầu nhập đúng dạng email");
    return;
  }

  // update
  if (event.target.classList.contains("update")) {
    let idUpdate = event.target.getAttribute("data-id");
    let indexUpdate;
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === +idUpdate) {
        indexUpdate = i;
        break;
      }
    }
    students[indexUpdate].name = inputName.value;
    students[indexUpdate].email = inputEmail.value;
    students[indexUpdate].phone = inputPhone.value;
    students[indexUpdate].address = inputAddress.value;
    students[indexUpdate].gender = valueGender.value;

    showStudent();

    document.querySelector("form").reset();

    btnAddStudent.classList.remove("update");
    btnAddStudent.innerHTML = "Lưu lại";
    btnAddStudent.removeAttribute("data-id");

    return;
  }
  // kết thúc update

  // thêm mới học viên
  let newStudent = {
    id: Date.now(),
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    address: inputAddress.value,
    gender: valueGender.value,
  };

  students.push(newStudent);
  showStudent();

  document.querySelector("form").reset();
}

btnAddStudent.addEventListener("click", handleAdd);





// xoá và edit học viên

function handleAction(e) {
  // xoá học viên.
  let clicked = e.target;
  if (clicked.classList.contains("delete")) {
    let idDelete = clicked.getAttribute("data-id");
    let indexDelete;
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === +idDelete) {
        indexDelete = i;
        break;
      }
    }
    console.log(indexDelete);
    students.splice(indexDelete, 1);
    showStudent();

    document.querySelector("form").reset();

    btnAddStudent.classList.remove("update");
    btnAddStudent.innerHTML = "Lưu lại";
    btnAddStudent.removeAttribute("data-id");
  }
  // edit student
  else if (clicked.classList.contains("edit")) {
    let idEdit = clicked.getAttribute("data-id");
    let indexEdit;
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === +idEdit) {
        indexEdit = i;
        break;
      }
    }
    inputName.value = students[indexEdit].name;
    inputEmail.value = students[indexEdit].email;
    inputPhone.value = students[indexEdit].phone;
    inputAddress.value = students[indexEdit].address;
    document.querySelector(
      `input[value = ${students[indexEdit].gender}]`
    ).checked = true;

    btnAddStudent.classList.add("update");
    btnAddStudent.innerHTML = "Update";
    btnAddStudent.setAttribute("data-id", idEdit);
  }
}

tableBody.addEventListener("click", handleAction);





// tìm kiếm
function handleSearch() {
  let findStudent = students.filter(function (element) {
    return element.name.toLowerCase().includes(searchInput.value);
  });
  console.log(findStudent);

  if (findStudent.length === 0) {
    elementTable.innerHTML = `<p class="table-text">Kết quả không tìm thấy</p>`;
  } else {
    let result = "";
    for (let i = 0; i < findStudent.length; i++) {
      result =
        result +
        `<tr>
            <td>${i + 1}</td>
            <td>${findStudent[i].name}</td>
            <td>${findStudent[i].email}</td>
            <td>${findStudent[i].phone}</td>
            <td>${findStudent[i].address}</td>
            <td>${findStudent[i].gender}</td>
            <td>
                <button data-id="${
                  findStudent[i].id
                }" class="btn btn-blue">EDit</button>
                <button data-id="${
                  findStudent[i].id
                }" class="btn btn-danger">Delete</button>
            </td>
        </tr>`;
    }
    tableBody.innerHTML = result;
  }
}

btnSearch.addEventListener("click", handleSearch);






// Sắp  xếp.

function handleSort() {
  let sortName = students.sort(function (std1, std2) {
    let a = std1.name.toLowerCase();
    let b = std2.name.toLowerCase();
    console.log(a, b);

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

  console.log(sortName);
  showStudent();
}

elementSort.addEventListener("click", handleSort);
