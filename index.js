document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const studentID = document.getElementById('studentID').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;

    if (!studentName || !studentID || !email || !contact) {
        alert('Please fill out all fields.');
        return;
    }

    const studentData = {
        name: studentName,
        id: studentID,
        email: email,
        contact: contact
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(studentData);
    localStorage.setItem('students', JSON.stringify(students));

    displayRecords();
    document.getElementById('studentForm').reset();
});

function displayRecords() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const tableBody = document.querySelector('#recordsTable tbody');
    tableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${student.email}</td>
            <td>${student.contact}</td>
            <td>
                <button onclick="deleteRecord(${index})">Delete</button>
                <button onclick="editRecord(${index})">Edit</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

   
    const recordsSection = document.getElementById('studentRecords');
    if (students.length > 5) {
        recordsSection.style.overflowY = 'scroll';
        recordsSection.style.maxHeight = '300px';
    }
}

function deleteRecord(index) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayRecords();
}

function editRecord(index) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    const student = students[index];
    document.getElementById('studentName').value = student.name;
    document.getElementById('studentID').value = student.id;
    document.getElementById('email').value = student.email;
    document.getElementById('contact').value = student.contact;

    deleteRecord(index);  
}

window.onload = displayRecords;





function displayRecords() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const tableBody = document.querySelector('#recordsTable tbody');
    tableBody.innerHTML = ' ';

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.id}</td>
            <td>${student.email}</td>
            <td>${student.contact}</td>
            <td>
                <button onclick="deleteRecord(${index})">Delete</button>
                <button onclick="editRecord(${index})">Edit</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    
    const recordsSection = document.getElementById('studentRecords');
    if (students.length > 5) {
        recordsSection.style.overflowY = 'scroll';
        recordsSection.style.maxHeight = '300px';
    }
}
