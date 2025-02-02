import {Router} from 'express'
import productRoutes from './productRoutes.js';
import socialUserRoutes from './socialUserRoutes.js'

const router = Router()

console.log("✅ socialUserRoutes Loaded Successfully!");
console.log("✅ productRoutes Loaded Successfully!");

router.use('/api/user', socialUserRoutes);
router.use('/api/product', productRoutes);

export default router