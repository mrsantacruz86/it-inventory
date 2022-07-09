// ROUTES MAIN INDEX

import path from 'path';
import { Router } from 'express';
// import * as jwt from 'jsonwebtoken';
import apiRoutes from './api';
import { authController } from '../controllers';

const router = Router();

// API Routes
// verifyToken middleware is securing all API Routes /api/*
router.use('/api', authController.verifyToken, apiRoutes);

// Autentication routes
router.route('/login').post(authController.login);
// logout action only takes place on the client by destroying the auth token.

router.route('/register').post(authController.register);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
);

export default router;
