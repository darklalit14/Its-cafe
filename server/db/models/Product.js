module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("products", {
        productId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncreament: true
        },
        name: {
            type: DataTypes.STRING,
            required: true
        },
        amount: {
            type: DataTypes.INTEGER,
            required: true
        },
        imgURL: {
            type: DataTypes.STRING,
            required: true
        }
    });

    return Product;
}