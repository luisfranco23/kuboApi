import Categories from './categories.model.js'
import Movies from './movies.model.js'
import Users from './users.model.js'
import ViewMovies from './viewMovies.model.js'

const models = () => {
    Categories.hasMany(Movies)
    Movies.belongsTo(Categories)
    Users.belongsToMany(Movies, {through: ViewMovies})
    Movies.belongsToMany(Users,{through: ViewMovies})
    ViewMovies
}


export default models