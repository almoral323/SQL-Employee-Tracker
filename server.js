const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

const initialMenu = [
    {
        type: 'list',
        message: 'Select action',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Role'
        ],
        name: 'initialMenu'
    }
];

const addDepartmentPrompt = [
    {
        type: 'input',
        message: 'Enter Department Name',
        name: 'addDepartment'
    }
];

const addRolePrompt = [
    {
        type: 'input',
        message: 'Enter Role Name',
        name: 'addRoleName'
    },
    {
        type: 'input',
        message: 'Enter Salary',
        name: 'addRoleSalary'
    },
    {
        type: 'input',
        message: 'Enter Department',
        name: 'addRoleDepartment'
    }
];

const addEmployeePrompt = [
    {
        type: 'input',
        message: 'Enter Employee First Name',
        name: 'addEmployeeFirstName'
    },
    {
        type: 'input',
        message: 'Enter Employee Last Name',
        name: 'addEmployeeLastName'
    },
    {
        type: 'list',
        message: 'Select Employee Role',
        choices: [
            { name: 'Manager', value: 1 },
            { name: 'Stocker', value: 2 },
            { name: 'Cashier', value: 3 }
        ],
        name: 'addEmployeeRole'
    },
    {
        type: 'input',
        message: 'Enter Employee ID',
        name: 'addEmployeeId'
    },
];

const updateRolePrompt = [
    {
        type: 'list',
        message: 'Select employee',
        choices: getEmployeeList(),
        name: 'selectEmployee'
    },
    {
        type: 'input',
        message: 'Enter New Role',
        name: 'updateRole'
    }
];

function getEmployeeList() {
    let currEmployees = []
    db.query('SELECT id FROM employee', function (err, results) {
        results.forEach(element => {
            currEmployees.push(element.id)
        });
    });
    return currEmployees;
}

function init() {
    startingMenu();
};

function startingMenu() {
    inquirer.prompt(initialMenu)
        .then((response) => {
            switch (response.initialMenu) {

                case "View All Departments":
                    viewDepartments();
                    break;

                case "View All Roles":
                    viewRoles();
                    break;

                case "View All Employees":
                    viewEmployees();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Update Role":
                    updateRole();
                    break;
            }
        });
};

function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        startingMenu();
    });
};


function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
        startingMenu();
    });
};

function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        startingMenu();
    });
};

function addDepartment() {
    inquirer
        .prompt(addDepartmentPrompt)
        .then((response) => {
            db.query(`INSERT INTO department (department_name) VALUES ("${response.addDepartment}")`, function (err, results) {
                if (err) throw err;
            });
            console.log(`Added department`)
            startingMenu();
        })
};

function addRole() {
    inquirer
        .prompt(addRolePrompt)
        .then((response) => {
            db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [response.addRoleName, response.addRoleSalary, response.addRoleDepartment], function (err, results) {
                if (err) throw err;
            });
            console.log(`Added role`)
            startingMenu();
        })
};

function addEmployee() {
    inquirer
        .prompt(addEmployeePrompt)
        .then((response) => {
            db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [response.addEmployeeFirstName, response.addEmployeeLastName, response.addEmployeeRole, response.addEmployeeId], function (err, results) {
                if (err) throw err;
            });
            console.log(`Added role`)
            startingMenu();
        })
};

function updateRole() {
    inquirer
        .prompt(updateRolePrompt)
        .then((response) => {
            // let roleId = response.updateRole
            // let employeeId = response.selectEmployee
            db.query("UPDATE employee set role_id = ? where id = ?;", [response.updateRole, response.selectEmployee], function (err, results) {
                if (err) throw err;
            });
            console.log(`Updated role`)
            startingMenu();
        }
        )
};

init();