import { Router } from 'express';
import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from '../Controllers/userController.js';
import { validateUpdateUserInput } from '../middlewares/validationMiddleware.js';
import {
  authorizepermission,
  checkForTestUser,
} from '../middlewares/authMiddleware.js';
import upload from '../middlewares/multerMiddleware.js';
const router = new Router();

router.get('/current-user', getCurrentUser);
router.get(
  '/admin/app-stats',
  authorizepermission('admin'),
  getApplicationStats
);
router.patch(
  '/update-user',
  checkForTestUser,
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
);

export default router;
