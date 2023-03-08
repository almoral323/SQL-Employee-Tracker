INSERT INTO department (department_name)
VALUES ("Management"),
       ("Stocking"),
       ("Cash Register");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 80000, 1),
       ("Stocker", 30000, 2),
       ("Cashier", 25000, 3);

INSERT INTO employee (first_name, last_name, role_id, employee_id)
VALUES ("Eric", "Spoelstra", 1, 1),
       ("Jimmy", "Butler", 2, 2),
       ("Bam", "Adebayo", 3, 3);
       