
import { v4 } from "uuid"
import Categories from "../models/categories.model.js"

export const createCategory = async (data) => {
    try {
        const response = await Categories.create({
            id: v4(),
            ...data
        })
        return response
    } catch (error) {
        throw error
    }
}