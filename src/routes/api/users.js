// USER ROUTES
import { Router } from 'express';

const router = Router();
const { userController } = require('../../controllers');

// Matches with "/api/books"
router.route('/').get(userController.getAll).post(userController.create);

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

export default router;
