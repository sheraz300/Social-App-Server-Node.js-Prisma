import {Router} from 'express'
import socialUserRoutes from './socialUserRoutes.js'

const router = Router()

router.use('/api/user', socialUserRoutes);

export default router