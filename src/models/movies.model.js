import { DataTypes, Deferrable } from "sequelize";
import db from "../utils/database.js";

const Movies = db.define('movies',{
    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    releaseDate:{
        field: 'release_date',
        type: DataTypes.DATE,
        allowNull: false
    },
    idCategory:{
        field: 'id_category',
        type: DataTypes.UUID,
        allowNull: false
    }
})

export default Movies