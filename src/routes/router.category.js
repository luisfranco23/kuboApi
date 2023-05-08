import { Router } from "express";
import { create } from "../services/categories.service.js";

const router = Router()

router.post('/', create)

export default router