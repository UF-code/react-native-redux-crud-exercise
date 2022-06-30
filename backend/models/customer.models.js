const customer_model = (sequelize, DataTypes) => {
    const Customer = sequelize.define('customer', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'Must be a valid email address',
                },
            },
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
    })

    return Customer
}

export default customer_model
