var students = [];

function saveStudent() {
    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var hometown = document.getElementById("hometown").value;
    var name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Vui lòng nhập họ và tên");
        return;
    }
    var email = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ");
        return;
    }


    var student = {
        name: name,
        gender: gender,
        email: email,
        phone: phone,
        hometown: hometown
    };

    students.push(student);
    displayStudents();
    document.getElementById("studentForm").reset();
}

function displayStudents() {
    var table = document.getElementById("studentTable");


    table.innerHTML = "";

    var headerRow = table.insertRow(0);
    var headers = ["STT", "Tên học viên", "Giới tính", "Email", "Số điện thoại", "Quê quán", "Thao tác"];
    for (var i = 0; i < headers.length; i++) {
        var headerCell = headerRow.insertCell(i);
        headerCell.innerHTML = headers[i];
    }

    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var row = table.insertRow(i + 1);
        row.insertCell(0).innerHTML = i + 1;
        row.insertCell(1).innerHTML = student.name;
        row.insertCell(2).innerHTML = student.gender;
        row.insertCell(3).innerHTML = student.email;
        row.insertCell(4).innerHTML = student.phone;
        row.insertCell(5).innerHTML = student.hometown;
        row.insertCell(6).innerHTML = `<button onclick="editStudent(${i})">Sửa</button>
                                        <button onclick="deleteStudent(${i})">Xóa</button>`;
    }
}


function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudent(index) {

    var student = students[index];
    document.getElementById("name").value = student.name;
    document.querySelector('input[name="gender"][value="' + student.gender + '"]').checked = true;
    document.getElementById("email").value = student.email;
    document.getElementById("phone").value = student.phone;
    document.getElementById("hometown").value = student.hometown;

    var saveButton = document.getElementById("saveButton");
    if (saveButton) {
        saveButton.parentNode.removeChild(saveButton);
    }

    saveButton = document.createElement("button");
    saveButton.id = "saveButton";
    saveButton.innerHTML = "Lưu";
    saveButton.onclick = function () {
        updateStudent(index);
    };

    var form = document.getElementById("studentForm");
    form.appendChild(saveButton);
}


function updateStudent(index) {
    var name = document.getElementById("name").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var hometown = document.getElementById("hometown").value;

    students[index].name = name;
    students[index].gender = gender;
    students[index].email = email;
    students[index].phone = phone;
    students[index].hometown = hometown;

    displayStudents();
    document.getElementById("studentForm").reset();
}

