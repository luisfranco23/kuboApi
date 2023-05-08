import { DataTypes } from "sequelize";
import db from "../utils/database.js";
import bcrypt from "bcrypt"

const Users = db.define('users',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    firstName: {
        field: 'first_name',
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        field: 'last_name',
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        defaultValue: 'https://example.com/uploadas/profile.jpg'
    },
    email:{
        type: DataTypes.STRING,
        validate:{
            isEmail: true
        },
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    hooks:{
        beforeCreate: (user, Option) => {
            user.password = bcrypt.hashSync(user.password, 10)
        }
    }
})

export default Users