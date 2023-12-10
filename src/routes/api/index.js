// ROUTES API INDEX

import { Router } from 'express';
import assetsRoutes from './assets';
import usersRoutes from './users';

const router = Router();
// Assets routes
router.use('/assets', assetsRoutes);

// Users routes
router.use('/users', usersRoutes);

export default router;
