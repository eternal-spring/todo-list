const config = require("./index");

module.exports = {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
  username: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE,
  host: config.DATABASE_HOST,
  port: config.DATABASE_PORT,
};
