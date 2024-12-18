import { StatusCodes } from 'http-status-codes';
import User from '../Models/userModel.js';
import { comparePassword, hashedPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../middlewares/errorHandlerMiddleware.js';
import { createJWT } from '../utils/tokenUtils.js';

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';
  const hashedpassword = await hashedPassword(req.body.password);
  req.body.password = hashedpassword;
  const user = await User.create(req.body);
  res.status(StatusCodes.OK).json({ msg: 'success' });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const isValid =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValid) throw new UnauthenticatedError('Invalid credentials');
  const token = createJWT({ userId: user._id, role: user.role });
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(StatusCodes.OK).json({ msg: 'user loged in successfully' });
};

export const logout = (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out successfully' });
};
