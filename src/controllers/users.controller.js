import Users from "../models/users.model.js"
import { v4 } from "uuid"

export const createUser = async (data) => {
    try {
        const user = await Users.create({
            id: v4(),
            ...data
        })
        return user
    } catch (error) {
        throw error
    }
}