const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "HW8cuy",
  password: "123",
  port: 5432,
});

module.exports = pool;