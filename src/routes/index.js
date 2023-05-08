import { Router } from 'express'
import routerUsers from './router.users.js'
import routerCategory from './router.category.js'
import routerMovie from './router.movies.js'
const router = Router()

router.use('/users', routerUsers)
router.use('/categories', routerCategory)
router.use('/movies', routerMovie)

export default router
