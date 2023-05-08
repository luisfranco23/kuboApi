import { Router } from "express";
import { create, getMovies } from "../services/movies.service.js";

const router = Router()

router.post('/', create)
router.get('/', getMovies)

export default router