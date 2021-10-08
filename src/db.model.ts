import db from './db';

export async function createTable() {
  const tableQuery = `
    CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    description VARCHAR(255))
    `;

  await db.query(tableQuery);
}
