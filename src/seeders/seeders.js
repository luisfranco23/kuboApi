import { v4 } from "uuid";
import db from "../utils/database.js";
import Categories from "../models/categories.model.js";

export const seeder = async () => {
    const categories = [
        {
            id: v4(),
            name: "Terror"
        }, {
            id: v4(),
            name: "Suspenso"
        }, {
            id: v4(),
            name: "Drama"
        }, {
            id: v4(),
            name: "Comedia"
        }
    ]
    db.sync()
        .then(() => {
            categories.forEach(category => {
                Categories.create(category)
            })
            console.log('Finish seeder category')
        })
        .catch(err => console.log(err))
}