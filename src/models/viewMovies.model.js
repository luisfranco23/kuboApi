import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const ViewMovies = db.define('view_movies',{
    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    movieid:{
        type: DataTypes.UUID,
        field: 'movie_id',
        allowNull: false
    },
    userId:{
        type: DataTypes.UUID,
        field: 'user_id',
        allowNull: false
    },
    view:{
        type: DataTypes.BOOLEAN
    }
})

export default ViewMovies