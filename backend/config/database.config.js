import dotenv from 'dotenv'
dotenv.config()

export const database_credentials = {
    HOST: process.env.DATABASE_HOST,
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE: process.env.DATABASE,
    DIALECT: 'mysql',
    POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}
