// ROUTES API INDEX

import { Router } from 'express';
import assetsRoutes from './assets';
import userRoutes from './users';

const router = Router();
// House routes
router.use('/assets', assetsRoutes);

// User routes
router.use('/users', userRoutes);

export default router;
