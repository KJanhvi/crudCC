// Define a global array to store the data
let data = [];

// Get references to the form and table elements
const myForm = document.getElementById("myForm");
const myTable = document.getElementById("myTable");

// Define a function to add a new row to the table
function addRow(name, email, phone) {
const newRow = myTable.insertRow(-1);
const nameCell = newRow.insertCell(0);
const emailCell = newRow.insertCell(1);
const phoneCell = newRow.insertCell(2);
const actionsCell = newRow.insertCell(3);
nameCell.textContent = name;
emailCell.textContent = email;
phoneCell.textContent = phone;
actionsCell.innerHTML = "<button onclick='editRow(this)'>Edit</button> <button onclick='deleteRow(this)'>Delete</button>";
}

// Define a function to submit the form data
function submitData() {
// Get the values from the form
const name = myForm.elements["name"].value;
const email = myForm.elements["email"].value;
const phone = myForm.elements["phone"].value;

// Add the data to the array
data.push({ name, email, phone });

// Add a new row to the table
addRow(name, email, phone);

// Reset the form
myForm.reset();
}

// Define a function to reset the form
function resetForm() {
myForm.reset();
}

// Define a function to edit a row in the table
function editRow(button) {
const row = button.parentNode.parentNode;
const name = row.cells[0].textContent;
const email = row.cells[1].textContent;
const phone = row.cells[2].textContent;
myForm.elements["name"].value = name;
myForm.elements["email"].value = email;
myForm.elements["phone"].value = phone;
row.remove();
}

// Define a function to delete a row from the table
function deleteRow(button) {
const row = button.parentNode.parentNode;
row.remove();
}

// Add an event listener to the form for when it is submitted
myForm.addEventListener("submit", function(event) {
// Prevent the default form submission behavior
event.preventDefault();

// Submit the form data
submitData();
});