import { log, delimeterMsg, logF } from '../util';

function overview() {
  log(
    `Let's see some logical operators:

    - use != for negate operator, e.g. "SELECT * FROM books WHERE title != 'lala'".
    - use NOT for 'not like' operator, e.g. "SELECT * FROM books WHERE title NOT LIKE '%lala%'".
    - use "<", "<=", ">", ">=", "%" operators for logical comparations.
    - use "AND" or "&&", "OR" or "||" for logical and/or operations.

    - use "BETWEEN" / "NOT BETWEEN" to get values between boundaries, e.g. "SELECT * FROM books WHERE pages BETWEEN 2 AND 56".
    - use "CAST" to get better comparation results, e.g. "SELECT CAST('2015-12-25' AS DATETIME)"
    - use "IN" / "NOT IN" to get values in range, e.g. "SELECT * FROM books WHERE pages IN (25, 567, 68)".

    - use "CASE" statements to get multiple choises. For example,
    SELECT title, stock_quantity,
      CASE
        WHEN stock_quantity BETWEEN 0 AND 50 THEN '*'
        WHEN stock_quantity BETWEEN 51 AND 100 THEN '**'
        WHEN stock_quantity BETWEEN 101 AND 150 THEN '***'
        ELSE '****'
      END AS STOCK
    FROM books;
    `,
  );
}

export default function logicalOperators() {
  delimeterMsg('LOGICAL OPERATORS');
  logF(overview);
}
