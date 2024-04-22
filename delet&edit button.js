console.log("table");
let isedit = -1;
let student = JSON.parse(localStorage.getItem("form")) || []

//delete button filter method

let deleteRecord = (indexx) => {
    const update = student.filter((item, index) => { return index !== indexx });
    student = update;
    localStorage.setItem("form", JSON.stringify(student));
    displayTable();
}

//edit button
const cEdit = (idx) => {
    isedit = idx
    const record = student.find((item, index) => { return (index === idx) });
    console.log(record);

    document.getElementById("Fullname").value = record.Fullname;
    document.getElementById("Lastname").value = record.Lastname;
    document.getElementById("Age").value = record.Age;
    document.getElementById("Email").value = record.Email;
}




// table
const displayTable = () => {
    document.getElementById("r").innerHTML = student.map((item, index) => {
        return (
            `<tr>
            <td>${item.Fullname}</td>
            <td>${item.Lastname}</td>+
            <td>${item.Age}</td>
            <td>${item.Email}</td>
            <td><button type="button" onclick = deleteRecord(${index}) style = "background-color : transparent ; border-radius: 5px"> Delete </button> </td>
            <td><button type = "button" onclick = cEdit(${index})  style = "background-color : transparent; border-radius: 5px">Edit </button></td>
            </tr>`
        )
    }).join('')

}
displayTable();


//function

function display() {
    const Fullname = document.getElementById("Fullname").value;
    console.log(Fullname);

    const Lastname = document.getElementById("Lastname").value;
    console.log(Lastname);

    const Age = document.getElementById("Age").value;
    console.log(Age);

    const Email = document.getElementById("Email").value;
    console.log(Email);

    // object
    const window = {
        Fullname: Fullname, Lastname: Lastname, Age: Age, Email: Email
    }



    // edit button condition code
    if (isedit !== -1) {
        const updatee = student.map((item, index) => {
            if (isedit === index) {
                return window
            }
            return item;
        })
        student = updatee;
    }

    else { student.push(window) };
    displayTable();
    localStorage.setItem("form", JSON.stringify(student));
    console.log("student", student);
    console.log(student)
}