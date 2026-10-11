// server/db.js
const mysql = require('mysql2');
require('dotenv').config(); // Guarantees env vars are available right here

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// Test connection once on application start
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    return;
  }
  console.log('Database connected successfully!');
  connection.release(); // Crucial: Always return it to the pool!
});

module.exports = pool;