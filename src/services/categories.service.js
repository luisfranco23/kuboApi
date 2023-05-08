import { createCategory } from "../controllers/categories.controller.js"

export const create = async (req, res, next) => {
    try {
        const category = req.body
        const response = await createCategory(category)
        if (response) {
            res.status(201).json({message: 'category create succesfylly'})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}