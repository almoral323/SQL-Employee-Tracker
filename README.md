## Employee Tracker

## Contents

[Description](#description)

[User Story](#user-story)

[Acceptance Criteria](#acceptance-criteria)

[Installation](#installation)

[Usage](#usage)

[Resources & Credit](#resourcescredit)

[Features](#features)

[Application Screenshot Preview](#application-screenshot-preview)

[License](#license)

## Description

- Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). My task is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
WHEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Installation

- Prerequisites:

- Node.js and npm should be installed on your system.
- MySQL should be installed on your system.

##

- Step 1: Clone the Repository

```md
Open your terminal or command prompt and navigate to the directory where you want to install the application.
Clone the repository by running the command: git clone https://github.com/username/repository-name.git.
Navigate to the cloned directory using the command: cd repository-name.
```

##

- Step 2: Install Dependencies

```md
In the terminal, run the command: npm install.
This will install all the dependencies required for the application to run.
```

##

- Step 3: Set up the Database

```md
Create a new database in MySQL using the command: CREATE DATABASE database-name;.
Open the schema.sql file located in the db folder of the application.
Copy and paste the contents of the file into a new query in MySQL Workbench and run it.
This will create the necessary tables for the application.
```

##

- Step 4: Configure the Application

- In the db folder, create a new file named .env.
- Open the file and add the following lines:

```md
DB_USER= 'your-mysql-username'
DB_PASSWORD= 'your-mysql-password'
DB_NAME= 'database-name'
```

```md
Replace 'your-mysql-username' and 'your-mysql-password' with your MySQL username and password, respectively.
Replace 'database-name' with the name of the database you created in step 3.
```

##

- Step 5: Start the Application

```md
In the terminal, run the command: npm start.
This will start the application and you should see the message "Server running on port 3001".
Open your web browser and navigate to http://localhost:3001 to use the application.
```

## Usage

- MySQL Employee Tracker is a web application that allows you to manage your employees and departments. Here's how you can use it:

- View All Employees:

```md
Click on the "View All Employees" button on the home page.
You will be directed to a page that displays a table of all employees in the database.
```

- Add Employee:

```md
Click on the "Add Employee" button on the home page.
Fill out the form with the employee's first name, last name, role, and manager (if applicable).
Click the "Submit" button to add the employee to the database.
```

- Update Employee:

```md
Click on the "View All Employees" button on the home page.
Click on the "Edit" button next to the employee you want to update.
Update the employee's information in the form.
Click the "Submit" button to save the changes to the database.
```

- Delete Employee:

```md
Click on the "View All Employees" button on the home page.
Click on the "Delete" button next to the employee you want to delete.
Confirm the deletion by clicking "Yes" in the confirmation prompt.
```

- View All Departments:

```md
Click on the "View All Departments" button on the home page.
You will be directed to a page that displays a table of all departments in the database.
```

- Add Department:

```md
Click on the "Add Department" button on the home page.
Enter the department's name in the form.
Click the "Submit" button to add the department to the database.
```

- Update Department:

```md
Click on the "View All Departments" button on the home page.
Click on the "Edit" button next to the department you want to update.

- Update the department's information in the form.
  Click the "Submit" button to save the changes to the database.
```

- Delete Department:

```md
Click on the "View All Departments" button on the home page.
Click on the "Delete" button next to the department you want to delete.
Confirm the deletion by clicking "Yes" in the confirmation prompt.
```

- With the MySQL Employee Tracker, you can easily manage your employees and departments with just a few clicks.

## Resources & Credit

- Author: Alfredo Morales


## Application Screenshot Preview
![Screenshot 2023-03-08 125156](https://user-images.githubusercontent.com/113931387/223791276-1910be7e-b2e7-4342-990b-6281559786bd.png)


## License

~
