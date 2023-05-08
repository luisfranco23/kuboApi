import { createUser } from "../controllers/users.controller.js"

export const create = async (req, res, next) => {
    const data = req.body
    try {
        const response = await createUser(data)
        if (response) {
            res.status(201).json({ message: 'User create succesfully' })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}