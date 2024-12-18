import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import mongoose from 'mongoose';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';
import { authenticateUser } from './middlewares/authMiddleware.js';
import cookieParser from 'cookie-parser';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import cloudinary from 'cloudinary';

const port = process.env.PORT || 5100;
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/jobs', authenticateUser, jobRouter);
app.use('/api/v1/users', authenticateUser, userRouter);
app.use('/api/v1/auth', authRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public'), 'index.html');
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Not Found Middleware
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

// Error Middleware
app.use(errorHandlerMiddleware);

try {
  await mongoose.connect(process.env.MONGODB_URL);
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
} catch (error) {
  console.error('Error connecting to MongoDB:', error.message);
  process.exit(1); // Exit the application with an error code
}
