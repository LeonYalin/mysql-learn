import { log, delimeterMsg, logF } from '../util';

function overview() {
  log(
    `Let's take about many:many relationships:

    When inplementing many:many relationships, we use as "join/union table" to connect between entities.

    CREATE TABLE reviewers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100)
    );
    
    CREATE TABLE series(
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(100),
      released_year YEAR(4),
      genre VARCHAR(100)
    );

    CREATE TABLE reviews (
      id INT AUTO_INCREMENT PRIMARY KEY,
      rating DECIMAL(2,1),
      series_id INT,
      reviewer_id INT,
      FOREIGN KEY(series_id) REFERENCES series(id),
      FOREIGN KEY(reviewer_id) REFERENCES reviewers(id)
    );

    - use "ROUND(num)" to round long numbers, e.g. "select ROUND(AVG(rating), 2)"
    - use "IF(expr, 'true_text', 'false_text')" when you don't need a CASE command
    
    - Example of joining all 3 tables:

    SELECT title, rating, CONCAT(first_name, ' ', last_name) AS fullname
    FROM series 
    JOIN reviews ON series.id=reviews.series_id
    JOIN reviewers ON reviewers.id=reviews.reviewer_id
    ORDER BY title;
    `,
  );
}

export default function manyToMany() {
  delimeterMsg('MANY TO MANY');
  logF(overview);
}
