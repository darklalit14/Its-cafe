const { Sequelize, DataTypes } = require("sequelize");

const sequelize = Sequelize("its-cafe", "root", "", {
  host: "",
  dialect: "mysql",
  logging: false,
});
