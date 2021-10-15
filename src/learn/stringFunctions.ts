import { log, delimeterMsg, logF } from '../util';

function overview() {
  log(
    `Working with sql files:

    - we can create files with ".sql" extensions and store sql code within it.
    - use "source <file_path> to run the file, e.g. "source /app/src/learn/files/example.sql".
    - use volumes to pass the files to docker container. "- ./src/learn/files:/app/" in docker-compose.yml.
    
    Working with string functions:
    - use "SELECT CONCAT(f_name, ' ', l_name) AS 'Full name' from <table_name>" to concat values.
    - use "SELECT CONCAT_WS('-', f_name, l_name) privide automatic concat separator.
    - use "SELECT SUBSTRING(f_name, 1, 4) to substring values. 1 is the first index (and not 0).
    - only start index can be used, including negative values, e.g. "SELECT SUBSTR(l_name, -3)"
    - use "SELECT REPLACE(f_name, 'a', '*')" to replace symbols in strings.
    - use "SELECT REVERSE(f_name)" to reverse strings.
    - use "SELECT CHAR_LENGTH(f_name)" to print the lenght of the string.
    - use "SELECT UPPER(f_name)" / "SELECT LOWER(f_name)" to uppercase / lowercase strings.
    `,
  );
}

export default function stringFunctions() {
  delimeterMsg('STRING FUNCTIONS');
  logF(overview);
}
