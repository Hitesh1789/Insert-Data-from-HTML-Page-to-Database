let btn = document.querySelector(".btn");
let std_name = document.getElementById("std_name");
let roll_no = document.getElementById("roll_no");

console.log("Radhe Radhe");

btn.addEventListener("click", () => {

    //Send data to the backend using fetch api
    sendData(std_name.value,roll_no.value)

    std_name.value = "";
    roll_no.value = "";
})

function sendData(sd_name, roll_num) {
    let studentData = {
        studentName: sd_name,
        rollNumber: roll_num
    };

    console.log(JSON.stringify(studentData));

    fetch('/sample/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData)
    })
    .then(response => {
        response.json()
    })
    .then(() => {
        console.log("Successfully inserted .");
    })    
}