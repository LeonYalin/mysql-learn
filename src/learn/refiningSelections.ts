import { log, delimeterMsg, logF } from '../util';

function overview() {
  log(
    `Let's see more selection tools:

    - use "SELECT DISTINCT <column1>, <column2> FROM <table_name>" to get unique values.
    - use "SELECT <column1>, <column2> FROM <table_name> ORDER BY <column1, <column2>" to sort the values.
    - use "ORDER BY ASC/DESC" to set sort order or "ORDER BY 2" use shortcut of the parameter column.
    - use "SELECT <column1> FROM <table_name> LIMIT 1" to limit the values.
    - use "LIMIT 1, 3" to specify starting point and range, a.k.a pagination.
    - use "SELECT * FROM <table_name> WHERE title LIKE '%the%'" to use pattern matching.
    - use "LIKE '_'" to match any single characters, e.g. "LIKE '(___)___-______'" will match (054)4540987.
    `,
  );
}

export default function refiningSelections() {
  delimeterMsg('REFINING OUR SELECTIONS');
  logF(overview);
}
