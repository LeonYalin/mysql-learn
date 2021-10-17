import { log, delimeterMsg, logF } from '../util';

function overview() {
  log(
    `Here are some new data types to work with:

    - CHAR: has fixes length, "CHAR(4)" will always be 4 bytes.
    - CHAR type is faster for fixes length text. In contrast, VARCHAR is a dynamic type, it stores what is needed only.

    - DECIMAL type is used for floating numbers. DECIMAL(5, 2) means the max length is 5, with 2 numbers after the comma.
    - For example, DECIMAL(5, 2): 7 -> 7.00, 999.99 -> 999.99, 2000 -> 999.99, 298.9999 -> 299.00, 1.999 -> 2.00.
    - FLOAT and DOUBLE types are used for big floating numbers. The problem is that the precition is falling after 7/15 digits.

    - DATE type is used for storing dates. The format is 'YYYY-MM-DD'.
    - TIME type is used for storing time. The format is 'HH-MM-SS'.
    - DATETIME type is a combination of DATE + TIME. The format is 'YYYY-MM-DD HH-MM-SS'.
    
    - use "CURDATE(), CURTIME(), NOW()" to get cuttent date / time / datetime. Try "select CURRDATE();"
    - use "DAY(date), DAYNAME(date), DAYOFWEEK(date), DAYOFYEAR(date), DATE_FORMAT(date, '%d/%m/%Y at %h:%i')" to get formatted date.

    - use "DATEDIFF(date, another_date)" to get diff in days.
    - use "DATE_ADD/DATE_SUB(date, INTERVAL <1> <DAY>)" to add / substract days.
    - we can use "select NOW() + INTERVAL 1 DAY", e.g. work with +/- instead of DATE_ADD/DATE_SUB.

    - use TIMESTAMP to store dates with less bytes used.
    - we can use TIMESTAMP in table creation:
    CREATE TABLE BOOKS(
      title VARCHAR(30),
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at DEFAULT NOW() ON UPDATE NOW()
    )
    `,
  );
}

export default function dataTypes() {
  delimeterMsg('DATA TYPES');
  logF(overview);
}
