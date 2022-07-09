// USER ROUTES
import { Router } from 'express';
import { userController } from '../../controllers';

const router = Router();

// Matches with "/api/users"
router.route('/').get(userController.getAll).post(userController.create);

// Matches with "/api/users/:id"
router
  .route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

export default router;
