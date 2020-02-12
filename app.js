// tavern 
// example + code 


// CREATE TABLE employee (
//     emp_id INT PRIMARY KEY,
//     first_name VARCHAR(40),
//     last_name VARCHAR(40),
//     birth_day DATE,
//     sex VARCHAR(1),
//     salary INT,
//     super_id INT,
//     branch_id INT
//   );
  
//   CREATE TABLE branch (
//     branch_id INT PRIMARY KEY,
//     branch_name VARCHAR(40),
//     mgr_id INT,
//     mgr_start_date DATE,
//     FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
//   );
  
//   ALTER TABLE employee
//   ADD FOREIGN KEY(branch_id)
//   REFERENCES branch(branch_id)
//   ON DELETE SET NULL;
  
//   ALTER TABLE employee
//   ADD FOREIGN KEY(super_id)
//   REFERENCES employee(emp_id)
//   ON DELETE SET NULL;
  
//   CREATE TABLE client (
//     client_id INT PRIMARY KEY,
//     client_name VARCHAR(40),
//     branch_id INT,
//     FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE SET NULL
//   );
  
//   CREATE TABLE works_with (
//     emp_id INT,
//     client_id INT,
//     total_sales INT,
//     PRIMARY KEY(emp_id, client_id),
//     FOREIGN KEY(emp_id) REFERENCES employee(emp_id) ON DELETE CASCADE,
//     FOREIGN KEY(client_id) REFERENCES client(client_id) ON DELETE CASCADE
//   );
  
//   CREATE TABLE branch_supplier (
//     branch_id INT,
//     supplier_name VARCHAR(40),
//     supply_type VARCHAR(40),
//     PRIMARY KEY(branch_id, supplier_name),
//     FOREIGN KEY(branch_id) REFERENCES branch(branch_id) ON DELETE CASCADE
//   );
  
  
//   -- -----------------------------------------------------------------------------
  
//   -- Corporate
//   INSERT INTO employee VALUES(100, 'David', 'Wallace', '1967-11-17', 'M', 250000, NULL, NULL);
  
//   INSERT INTO branch VALUES(1, 'Corporate', 100, '2006-02-09');
  
//   UPDATE employee
//   SET branch_id = 1
//   WHERE emp_id = 100;
  
//   INSERT INTO employee VALUES(101, 'Jan', 'Levinson', '1961-05-11', 'F', 110000, 100, 1);
  
//   -- Scranton
//   INSERT INTO employee VALUES(102, 'Michael', 'Scott', '1964-03-15', 'M', 75000, 100, NULL);
  
//   INSERT INTO branch VALUES(2, 'Scranton', 102, '1992-04-06');
  
//   UPDATE employee
//   SET branch_id = 2
//   WHERE emp_id = 102;
  
//   INSERT INTO employee VALUES(103, 'Angela', 'Martin', '1971-06-25', 'F', 63000, 102, 2);
//   INSERT INTO employee VALUES(104, 'Kelly', 'Kapoor', '1980-02-05', 'F', 55000, 102, 2);
//   INSERT INTO employee VALUES(105, 'Stanley', 'Hudson', '1958-02-19', 'M', 69000, 102, 2);
  
//   -- Stamford
//   INSERT INTO employee VALUES(106, 'Josh', 'Porter', '1969-09-05', 'M', 78000, 100, NULL);
  
//   INSERT INTO branch VALUES(3, 'Stamford', 106, '1998-02-13');
  
//   UPDATE employee
//   SET branch_id = 3
//   WHERE emp_id = 106;
  
//   INSERT INTO employee VALUES(107, 'Andy', 'Bernard', '1973-07-22', 'M', 65000, 106, 3);
//   INSERT INTO employee VALUES(108, 'Jim', 'Halpert', '1978-10-01', 'M', 71000, 106, 3);
  
  
//   -- BRANCH SUPPLIER
//   INSERT INTO branch_supplier VALUES(2, 'Hammer Mill', 'Paper');
//   INSERT INTO branch_supplier VALUES(2, 'Uni-ball', 'Writing Utensils');
//   INSERT INTO branch_supplier VALUES(3, 'Patriot Paper', 'Paper');
//   INSERT INTO branch_supplier VALUES(2, 'J.T. Forms & Labels', 'Custom Forms');
//   INSERT INTO branch_supplier VALUES(3, 'Uni-ball', 'Writing Utensils');
//   INSERT INTO branch_supplier VALUES(3, 'Hammer Mill', 'Paper');
//   INSERT INTO branch_supplier VALUES(3, 'Stamford Lables', 'Custom Forms');
  
//   -- CLIENT
//   INSERT INTO client VALUES(400, 'Dunmore Highschool', 2);
//   INSERT INTO client VALUES(401, 'Lackawana Country', 2);
//   INSERT INTO client VALUES(402, 'FedEx', 3);
//   INSERT INTO client VALUES(403, 'John Daly Law, LLC', 3);
//   INSERT INTO client VALUES(404, 'Scranton Whitepages', 2);
//   INSERT INTO client VALUES(405, 'Times Newspaper', 3);
//   INSERT INTO client VALUES(406, 'FedEx', 2);
  
//   -- WORKS_WITH
//   INSERT INTO works_with VALUES(105, 400, 55000);
//   INSERT INTO works_with VALUES(102, 401, 267000);
//   INSERT INTO works_with VALUES(108, 402, 22500);
//   INSERT INTO works_with VALUES(107, 403, 5000);
//   INSERT INTO works_with VALUES(108, 403, 12000);
//   INSERT INTO works_with VALUES(105, 404, 33000);
//   INSERT INTO works_with VALUES(107, 405, 26000);
//   INSERT INTO works_with VALUES(102, 406, 15000);
//   INSERT INTO works_with VALUES(105, 406, 130000);


https://www.youtube.com/watch?v=HXV3zeQKqGY    2:17 create database + foreign keys






------------------------------

The system should also be able to track Rooms. Rooms should have a status and an associated tavern. There should be a way to track Room Stays which will contain a sale, guest, room, the date it was stayed in and the rate
Write a query that returns guests with a birthday before 2000. 
Write a query to return rooms that cost more than 100 gold a night
Write a query that returns UNIQUE guest names. 
Write a query that returns all guests ordered by name (ascending) Use ASC or DESC after your ORDER BY [col]
Write a query that returns the top 10 highest price sales
Write a query to return all the values stored in all Lookup Tables - Lookup tables are the tables we reference typically with just an ID and a name. This should be a dynamic combining of all of the tables
Write a query that returns Guest Classes with Levels and Generate a new column with a label for their level grouping (lvl 1-10, 10-20, etc)
Write a series of INSERT commands that will insert the statuses of one table into another of your choosing using SELECT statements (See our lab in class - The INSERT commands should be generated). It’s ok if the data doesn’t match or make sense! :)
Remember, INSERT Commands look like: INSERT INTO Table1 (column1, column2) VALUES (column1, column2)

Lab:
 
SELECT 
CONCAT('CREATE TABLE ',TABLE_NAME, ' (') as queryPiece 
FROM INFORMATION_SCHEMA.TABLES
 WHERE TABLE_NAME = 'Taverns'
UNION ALL
SELECT CONCAT(cols.COLUMN_NAME, ' ', cols.DATA_TYPE, 
(CASE WHEN CHARACTER_MAXIMUM_LENGTH IS NOT NULL 
Then CONCAT('(', CAST(CHARACTER_MAXIMUM_LENGTH as varchar(100)), 
')') Else '' END), ',') as queryPiece FROM 
INFORMATION_SCHEMA.COLUMNS as cols WHERE
TABLE_NAME = 'Taverns'
UNION ALL
SELECT ')';


