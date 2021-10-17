import { log, delimeterMsg, logF } from '../util';

function crudFunctions() {
  log(
    `Here are some CRUD commands we can use with tables:

    - use "SELECT * FROM <table_name>" to select all records.
    - use "SELECT <column1>, <column2> FROM <table_name>" to select specific columns.
    - use "SELECT * FROM <table_name> WHERE <criteria>" to use specific criteria.
    - e.g. "SELECT * FROM <table_name> WHERE name='Leon'"
    - use "SELECT name AS cat_name, age AS 'cat age' FROM <table_name>" to use alias and change name for columns.

    - use "UPDATE <db_name.table_name> SET name='Leon' WHERE age=4" to update columns.

    - use "DELETE FROM <db_name.table_name> WHERE age=4" to delete columns.
    - use "DELETE FROM <db_name.table_name>" to delete all columns.
    `,
  );
}

export default function tableCRUD() {
  delimeterMsg('TABLE CRUD');
  logF(crudFunctions);
}
