const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString: process.env.DB_URL,
  // user: process.env.DB_USER,
  // host: process.env.DB_HOST,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT,
});

module.exports = pool;