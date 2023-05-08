import { createMovies, getAllMovies } from "../controllers/movies.controller.js"

export const create = async (req, res, next) => {
    try {
        const data = req.body
        const repsonse = await createMovies(data)
        if (repsonse) {
        res.status(201).json({message: "Movie create succesfylly", repsonse})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getMovies = async(req, res, next) => {
    try {
        const category = req.query.category
        const response = await getAllMovies()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error)
    }
}