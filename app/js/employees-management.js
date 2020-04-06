function display_menu() {
    "use strict";
    window.console.log("Welcome to the Employee Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all employees");
    window.console.log("add - Add an employee");
    window.console.log("update - Update a employee");
    window.console.log("del - Delete an employee");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function displayEmployees() { 
    let employees = JSON.parse(localStorage.getItem('employees'));
    
    if (employees.length === 0) {    
        console.log('There is no employee in the list!');    
    }

    if (employees.length > 0) {        
        let orderedEmployees = employees.sort((a, b) => (a.id > b.id) ? 1 : -1);

        for (const employee of orderedEmployees) {
            displayEmployees(employee)
        }
    
        console.log('');
    }
    
    displayNumberOfEmploees(employees);

}

function displayEmployees(employee, message) {    
    console.log(employee.id + ' ' + employee.name + ' (' +  employee.title + ') ' + '$' + employee.extension + (message ? message : ''));    
    location.reload();
}

function checkFields() {    
    
    let errorText = document.getElementById("error");
    
    errorText.classList.add("errorText");

    let id = document.getElementById("IDInput");
    let name = document.getElementById("EmployeeNameInput");
    let title = document.getElementById("EmployeeTitleInput");
    let extension = document.getElementById("EmployeeExtensionInput");
    
    id.classList.remove("error");
    name.classList.remove("error");
    title.classList.remove("error");
    extension.classList.remove("error");

    if (id.value == "") {                        
        id.classList.add("error");
        errorText.innerHTML = "Id is Mandatory";        
        return false
    } 
    
    if (name.value == "") {        
        name.classList.add("error");       
        errorText.innerHTML = "Name is Mandatory";

        return false
    }
    
    if (title.value == "") {        
        title.classList.add("error");
        errorText.innerHTML = "Title is Mandatory";

        return false
    }
    
    if (extension.value == "") {       
        extension.classList.add("error");
        errorText.innerHTML = "Extension is Mandatory";
        
        return false        
    }    

    return true;
}

function add() {
        
    let employees = JSON.parse(localStorage.getItem('employees'));
    let newEmployee = {};
    
    newEmployee.id = parseInt(document.getElementById("IDInput").value); 
    newEmployee.name = document.getElementById("EmployeeNameInput").value;
    newEmployee.title = document.getElementById("EmployeeTitleInput").value; 
    newEmployee.extension = parseInt(document.getElementById("EmployeeExtensionInput").value);

    if (!checkFields()) {        
        return;
    }
    
    employees.push(newEmployee);

    localStorage.setItem('employees', JSON.stringify(employees)); 
    displayEmployees(newEmployee, ' was added.');
    
    console.log('');
}

function remove(employeeID) {
    let empID = parseInt(employeeID); //parseInt(window.prompt("Employee ID to delete"));
    let employees = JSON.parse(localStorage.getItem('employees'));

    for (const [index, employee] of employees.entries()) {
        if (employee.id === empID) {            
            employees.splice(index, 1);            
            displayEmployees(employee, ' was deleted.');
            localStorage.setItem('employees', JSON.stringify(employees)); 
            console.log('');

            location.reload();
        }
    }    
}

function update(employeeID) {
    let empID = parseInt(employeeID);
    let employees = JSON.parse(localStorage.getItem('employees'));

    var newEmployee = {};
    
    newEmployee.id = empID;
    newEmployee.name = window.prompt("Enter the employee's name");
    newEmployee.title = window.prompt("Enter the employee's title");
    newEmployee.extenstion = window.prompt("Enter the employee's extension");

    for (const [index, employee] of employees.entries()) {
        if (employee.id === empID) {            
            employee.splice(index, 1, newEmployee);
            displayEmployees(employee, ' was updated.');
            localStorage.setItem('employees', JSON.stringify(employees)); 
            console.log('');

            location.reload();
        }
    }
}

function displayNumberOfEmploees(employees) {
    document.getElementById("numberOfEmployees").innerHTML = 'Showing ' + employees.length + ' Employees'; 
}

function main() {    
    
    let preLoadedEmployees = [
        {
            id: 9382,
          name: "Sally Smith",
          title: "Quality Assurance",
          extension: 3423
        }, 
        {
            id: 3223,
          name: "Mark Martin",
          title: "VP Sales",
          extension: 3346
        },
        {
            id: 4824,
          name: "John Johson",
          title: "Marketing",
          extension: 2332
        },
        {
            id: 2233,
          name: "Paulo Rego",
          title: "Engineer",
          extension: 9878
        },
        {
            id: 6343,
          name: "Michael Jordan",
          title: "Software Developer",
          extension: 9908
        }
    ]
    
    if (!localStorage.getItem('employees')){        
        localStorage.setItem('employees', JSON.stringify(preLoadedEmployees)); 
    }

    let employees = JSON.parse(localStorage.getItem('employees'));

    let table = document.getElementById('table');
    
    console.log(employees);

    var header = table.createTHead();
    var row = header.insertRow(0);
    let id = row.insertCell(0);
    let name = row.insertCell(1);
    let title = row.insertCell(2);
    let extension = row.insertCell(3);

    id.innerHTML = "ID";
    name.innerHTML = "Name";
    title.innerHTML = "Title";
    extension.innerHTML = "Extension";

    displayNumberOfEmploees(employees); 

    for (const [index, employee] of employees.entries()) {        
        let row = table.insertRow(index + 1);
        let id = row.insertCell(0);
        let name = row.insertCell(1);
        let title = row.insertCell(2);
        let extension = row.insertCell(3);
        let updateIcon = row.insertCell(4);
        let deleteIcon = row.insertCell(5);
        
        id.innerHTML = employee.id;
        name.innerHTML = employee.name;
        title.innerHTML = employee.title;
        extension.innerHTML = employee.extension;
        updateIcon.innerHTML = '<span class="iconify" onclick="update('+ employee.id +');" data-icon="bx:bx-edit" data-inline="false"></span>';
        deleteIcon.innerHTML = '<span class="iconify" onclick="remove('+ employee.id +');" data-icon="ic:outline-delete" data-inline="false"></span>';
    }

}

