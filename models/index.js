const { Pool } = require("pg");

const pool = new Pool({
  user: "sufyan",
  host: "localhost",
  database: "sufyan",
  password: "null",
  port: 5432
});

module.exports = {
  pool
};
