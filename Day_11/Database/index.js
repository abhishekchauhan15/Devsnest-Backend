const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres", //db name
  "postgres", //user name
  "iamabhi", //password
  {
    host: "127.0.0.1",
    dialect: "postgres", //supose if we want to change the dialect to mysql, we can do it here
  }
);

(async () => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log("connection established with db");
  } catch (err) {
    console.error(err);
  }
})();

module.exports = sequelize;
