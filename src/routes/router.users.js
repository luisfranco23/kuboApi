import { Router } from "express";
import { create } from "../services/users.service.js";

const router = Router()

router.post('/', create)

export default router