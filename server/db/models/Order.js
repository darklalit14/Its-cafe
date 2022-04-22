module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("orders",{
        orderId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncreament: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        status: {
            type: DataTypes.INTEGER,
            isIn: [[0, 1]]
        },
        username: {
            type: DataTypes.STRING,
            required: true
        },
        userContact: {
            type: DataTypes.INTEGER,
            required: true
        }
    });

    return Order;
}