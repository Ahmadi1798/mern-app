import { Router } from 'express';
const router = Router();

import {
  getAllJobs,
  getJobById,
  createJob,
  deleteJobById,
  updateJobById,
  showStats,
} from '../Controllers/jobController.js';
import {
  validateIdParam,
  validateJobInput,
} from '../middlewares/validationMiddleware.js';
import { checkForTestUser } from '../middlewares/authMiddleware.js';

router.route('/').get(getAllJobs);
router.route('/').post(checkForTestUser, validateJobInput, createJob);
router.route('/stats').get(showStats);
router
  .route('/:id')
  .patch(checkForTestUser, validateJobInput, validateIdParam, updateJobById);
router.route('/:id').get(validateIdParam, getJobById);
router.route('/:id').delete(checkForTestUser, deleteJobById);

export default router;
