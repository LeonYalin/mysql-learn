import { log, delimeterMsg, logF } from '../util';

function overview() {
  log(
    `Let's take about 1:many relationships:

    In order to create a 1:many relationship, we need to specify a FOREIGN KEY.

    CREATE TABLE customers(
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      email VARCHAR(100)
    );
    CREATE TABLE orders(
        id INT AUTO_INCREMENT PRIMARY KEY,
        order_date DATE,
        amount DECIMAL(8,2),
        customer_id INT,
        FOREIGN KEY(customer_id) REFERENCES customers(id)
    );

    Let's talk about JOINS:

    The "Cross Join"
    - IT looks like "SELECT * FROM customers, orders".
    - It multiplies all records from one table by each record of another. It is useless.

    The "Inner Join"
    - Implicit Inner Join: "SELECT * FROM customers, orders WHERE customers.id=orders.customer_id"
    - Emplicit Inner Join: "SELECT * FROM customers JOIN orders ON customers.id=orders.customer_id"
    - Inner Join with Group by: "SLECT * FROM customers JOIN orders ON customers.id=orders.customer_id GROUP BY customers.id"

    "The Left Join"
    - It takes everything from the first(left) table + the common(inner) part. 
    - "SELECT * FROM customers LEFT JOIN orders ON customers.id=orders.customer_id"
    - use "IFNULL(SUM(amount), 0)" to replace NULLs with default text, e.g. '0'

    "The Right Join"
    - It takes everything from the second(right) table + the common(inner) part. 
    - "SELECT * FROM customers RIGHT JOIN orders ON customers.id=orders.customer_id"

    "On delete cascade"
    - When we delete a row which primary key is used in other table, we can instruct mysql to delete foreign row as well.
    - Because is the primary row is deleted, the foreign key will point to nowhere.
    CREATE TABLE orders(
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_date DATE,
      amount DECIMAL(8,2),
      customer_id INT,
      FOREIGN KEY(customer_id) 
          REFERENCES customers(id)
          ON DELETE CASCADE
  );
    `,
  );
}

export default function oneToMany() {
  delimeterMsg('ONE TO MANY');
  logF(overview);
}
