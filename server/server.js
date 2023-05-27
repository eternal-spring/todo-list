const app = require("./src/index");
const config = require("./src/Config");
const { sequelize } = require("./src/Models");

sequelize.sync().then(() => {
  app.listen(config.PORT, () => {
    console.log(`App listening at http://localhost:${config.PORT}`);
  });
});
