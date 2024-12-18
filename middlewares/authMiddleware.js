import { verifyJWT } from '../utils/tokenUtils.js';
import { UnauthenticatedError } from './errorHandlerMiddleware.js';
import { BadRequestError } from './errorHandlerMiddleware.js';

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalid');
  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === '674499539088dca26a883e7d';
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  }
};
export const authorizepermission = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthenticatedError('unauthorized to access this route');
    }
    next();
  };
};
export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError('Demo User. Read Only!');
  }
  next();
};
