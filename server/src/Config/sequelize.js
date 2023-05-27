const dbConfig = require("./database");
const Sequelize = require("sequelize");
const Pool = require("pg-pool");

const sequelize = new Sequelize(dbConfig);

function createTable() {
  const config = {
    user: dbConfig.username,
    password: dbConfig.password,
    host: dbConfig.host,
    port: dbConfig.port,
    max: 50,
    min: 0,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 30000,
  };

  const pool = new Pool(config);

  // var connection = await pool.connect();

  pool.query("CREATE DATABASE " + dbConfig.database, [], (err, res) => {
    if (err !== null && err != undefined) {
      console.log(`err: ${err}`);
    } else {
      console.log(`num rows: ${res.rows.length}`);
    }
  });
}

createTable();

module.exports = sequelize;
