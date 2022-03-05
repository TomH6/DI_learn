-- Write a query to display the names (first_name, last_name) 
-- using an alias name “First Name”, “Last Name” from the employee table.
#1
SELECT first_name AS "First Name", last_name AS "Last Name"
FROM public.employees;

-- Write a query to get unique departments ID from the employee table (ie. without duplicates).
#2
SELECT DISTINCT department_id FROM public.employees;

-- Write a query to get the details of all employees from the employee table, 
-- do so in descending order by first name.
#3
SELECT employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id 
FROM public.employees ORDER BY first_name DESC;

-- Write a query to get the names (first_name, last_name), 
-- salary and 15% of salary as PF (ie. alias) for all the employees.
#4
SELECT first_name, last_name, salary, FLOOR(salary * 15/100) AS Percentage FROM public.employees;

-- Write a query to get the employee IDs, 
-- names (first_name, last_name) and salary in ascending order according to their salary.
#5
SELECT employee_id, first_name, last_name, salary FROM public.employees ORDER BY salary;

-- Write a query to get the total sum of all salaries paid to the employees.
#6
SELECT SUM(salary) FROM public.employees;

-- Write a query to get the maximum and minimum salaries paid to the employees.
#7
SELECT MIN(salary), MAX(salary) FROM public.employees;

-- Write a query to get the average salary paid to the employees.
#8
SELECT FLOOR(AVG(salary))FROM public.employees;

-- Write a query to get the number of employees working in the company.
#9
SELECT COUNT(employee_id) FROM public.employees;

-- Write a query to get all the first names from the employees table in upper case.
#10
SELECT UPPER(first_name) FROM public.employees;

-- Write a query to get the first three characters of each first name of all the employees in the employees table.
#11
SELECT SUBSTRING(first_name,1,3) FROM employees;

-- Write a query to get the full names of all the employees in the employees table. 
-- You have to include the first name and last name.
#12
SELECT CONCAT(first_name,' ',last_name) FROM public.employees;

-- Write a query to get the first name, last name and the length of the full name 
-- of all the employees from the employees table.
#13
SELECT first_name, last_name, LENGTH(CONCAT(first_name,last_name)) FROM public.employees;

-- Write a query to check whether the first_name column of the employees table contains any numbers.
#14
SELECT first_name FROM public.employees WHERE first_name LIKE '%[0-9]%';

-- Write a query to select the first ten records from a table.
#15
SELECT employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id
FROM public.employees LIMIT 10;


-- Restricting And Sorting --

-- Write a query to display the first_name, last_name and salary of all employees 
-- whose salary is between $10,000 and $15,000.
#1
SELECT first_name, last_name, salary FROM public.employees WHERE salary > 10000 AND salary < 15000;

-- Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
#2
SELECT first_name, last_name, hire_date FROM public.employees WHERE hire_date BETWEEN '1986-12-31' AND '1988-01-01';

-- Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
#3
SELECT first_name FROM public.employees WHERE first_name LIKE '%c%' AND first_name LIKE '%e%';

-- Write a query to display the last_name, job, and salary of all the employees 
-- who don’t work as Programmers or Shipping Clerks, 
-- and who don’t receive a salary equal to $4,500, $10,000, or $15,000.
#4
SELECT last_name, job_id, salary FROM public.employees 
WHERE job_id != 9 AND job_id != 17 
AND salary != 4500 AND salary != 10000 AND salary != 15000;

-- Write a query to display the last names of all employees whose last name contains exactly six characters.
#5
SELECT last_name FROM public.employees WHERE LENGTH(last_name) = 6;

-- Write a query to display the last name of all employees who have the letter ‘e’ as the third character 
-- in the name.
#6
SELECT last_name FROM public.employees WHERE last_name LIKE '__e%';

-- Write a query to display the jobs title appearing in the employees table.
#7
SELECT job_title
From public.employees
INNER JOIN public.jobs
ON public.employees.job_id  = public.jobs.job_id;

-- Write a query to select all information of employees whose 
-- last name is either ‘JONES’ or ‘BLAKE’ 
-- or ‘SCOTT’ or ‘KING’ or ‘FORD’.
#8
SELECT employee_id, first_name, last_name, email, phone_number, hire_date, job_id, salary, manager_id, department_id
FROM public.employees
WHERE last_name = 'Jones' OR last_name = 'Blake' OR last_name = 'Scott' OR last_name = 'King' OR last_name = 'Ford';
--The answer above works.
--The answer below does NOT. because we are asking for names that are not in the database.


