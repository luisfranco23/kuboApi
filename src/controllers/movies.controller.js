import Movies from "../models/movies.model.js"
import { v4 } from "uuid"

export const createMovies = async (data) => {
    try {
        const result = await Movies.create({
            id: v4(),
            ...data
        })
        return result
    } catch (error) {
        throw error
    }
}

export const getAllMovies = async () => {
    try {
        const result = Movies.findAll()
        return result
    } catch (error) {
        throw error
    }
}