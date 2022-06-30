import { database_credentials } from '../config/database.config.js'
import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize(
    database_credentials.DATABASE,
    database_credentials.USER,
    database_credentials.PASSWORD,
    {
        host: database_credentials.HOST,
        dialect: database_credentials.DIALECT,
        operatorsAliases: false,

        pool: {
            max: database_credentials.POOL.max,
            min: database_credentials.POOL.min,
            acquire: database_credentials.POOL.acquire,
            idle: database_credentials.POOL.idle,
        },
    }
)

sequelize
    .authenticate()
    .then(() => {
        console.log('Authenticated...')
    })
    .catch((err) => {
        console.error(`Error Occured Reason is ${err}`)
    })

const _database = {}

_database.Sequelize = Sequelize
_database.sequelize = sequelize

import customer_model from '../models/customer.models.js'

_database.customers = customer_model(sequelize, DataTypes)

_database.sequelize.sync({ force: false }).then(() => {
    console.log('Synchronization established!')
})

export default _database
