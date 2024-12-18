import { Router } from 'express';
const router = new Router();
import { login, logout, register } from '../Controllers/authController.js';
import {
  validateRegister,
  validateLogin,
} from '../middlewares/validationMiddleware.js';

router.post('/login', validateLogin, login);
router.post('/register', validateRegister, register);
router.get('/logout', logout);

export default router;
