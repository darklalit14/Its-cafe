const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("itscafe", "root", "", {
  host: "",
  dialect: "mysql",
  logging: true,
});

sequelize
  .authenticate()
  .then(() => console.log("DB Connection Success"))
  .catch((err) => console.log(err));

const forceSync = async () => {
  try {
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await sequelize.sync();
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  } catch (err) {
    console.log(err);
  }
};

forceSync();

const db = {};

db.sequelize = sequelize;

db.Order = require("./models/Order")(sequelize, DataTypes);
db.Product = require("./models/Product")(sequelize, DataTypes);

// Associations
db.Order.hasMany(db.Product, { foreignKey: "productId" });
db.Product.belongsToMany(db.Order, { through: "productOrders", foreignKey: "productId" })