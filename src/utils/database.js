import { Sequelize } from "sequelize";
import { config } from "dotenv"
config()

const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    logging: false
})

export default db