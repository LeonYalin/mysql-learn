import { log, delimeterMsg, logF } from '../util';

function overview() {
  log(
    `Let's see some aggregate functions:

    - use "SELECT COUNT(*) FROM <table_name>" to get total rows count.
    - use "SELECT COUNT(*) FROM <table_name> GROUP BY <name>, <age>" to get results grouped by columns.

    - use "SELECT MIN/MAX(pages) FROM <table_name>" to get min / max value from column.
    - use "SELECT * FROM <table_name> WHERE pages=(select MIN(pages) FROM books)" to get min value with other columns.
    - another way is "SELECT * FROM <table_name> ORDER BY pages ASC LIMIT 1" to get min value with other columns.
    - use "SELECT author_fname, author_lname, MIN(pages) FROM <table_name> GROUP BY auhor_fname, author_lname" to group with min / max.
    - the "SUM(pages)" and "AVG(pages)" are similar to min / max and used to get the sum or average of some column.
    `,
  );
}

export default function aggregateFunctions() {
  delimeterMsg('AGGREGATE FUNCTIONS');
  logF(overview);
}
