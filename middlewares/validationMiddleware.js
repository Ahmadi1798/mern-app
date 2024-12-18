import { body, param, validationResult } from 'express-validator';
import {
  BadRequestError,
  UnauthorizedError,
} from './errorHandlerMiddleware.js';
import { NotFoundError } from '../errors/customErrors.js';
import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';
import Job from '../Models/jobModel.js';
import User from '../Models/userModel.js';
import mongoose from 'mongoose';

const withValidationError = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((error) => error.msg);
        if (errorMessage[0].startsWith('no job')) {
          throw new NotFoundError(errorMessage);
        }
        if (errorMessage[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route ');
        }
        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};

export const validateJobInput = withValidationError([
  body('company').notEmpty().withMessage('Company is required'),
  body('position').notEmpty().withMessage('Position is required'),
  body('jobLocation').notEmpty().withMessage('job location is required'),
  body('jobStatus')
    .isIn(Object.values(JOB_STATUS))
    .withMessage('Invalid status value'),
  body('jobType')
    .isIn(Object.values(JOB_TYPE))
    .withMessage('Invalid type value'),
]);

export const validateIdParam = withValidationError([
  param('id').custom(async (value, { req }) => {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) throw new BadRequestError('Invalid MongoDB id');
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`no job with id ${value} `);
    const isAdmin = req.user.role === 'admin';
    const isOwner = req.user.userId === job.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw new UnauthorizedError('not authorized to access this route');
  }),
]);

export const validateRegister = withValidationError([
  body('name').notEmpty().withMessage('name is required'),
  body('lastName').notEmpty().withMessage('last name is required'),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('email')
    .notEmpty()
    .withMessage('password is required')
    .isEmail()
    .withMessage('Invalid email address')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) throw new BadRequestError('Email already exists');
      return;
    }),
  body('location').notEmpty().withMessage('location is required'),
]);

export const validateUpdateUserInput = withValidationError([
  body('name').notEmpty().withMessage('name is required'),
  body('lastName').notEmpty().withMessage('last name is required'),
  body('email')
    .notEmpty()
    .withMessage('password is required')
    .isEmail()
    .withMessage('Invalid email address')
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId)
        throw new BadRequestError('Email already exists');
      return;
    }),
  body('location').notEmpty().withMessage('location is required'),
]);

export const validateLogin = withValidationError([
  body('password').notEmpty().withMessage('password is required'),
  body('email')
    .notEmpty()
    .withMessage('password is required')
    .isEmail()
    .withMessage('Invalid email address'),
]);
