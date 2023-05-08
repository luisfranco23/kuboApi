import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Categories = db.define('categories', {
    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name:{ 
        type: DataTypes.STRING
    }
})

export default Categories