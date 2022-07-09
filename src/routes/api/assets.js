// ASSETS ROUTES
import { Router } from 'express';
import { assetsController } from '../../controllers';

const router = Router();

// Matches with "/api/houses"
router.route('/').get(assetsController.getAll).post(assetsController.create);

// Matches with "/api/houses/:id"
router
  .route('/:id')
  .get(assetsController.findById)
  .patch(assetsController.update)
  .delete(assetsController.remove);

export default router;
