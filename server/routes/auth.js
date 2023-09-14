import express from 'express';
import { signup } from '../controllers/auth.js';

const router = express.Router();

//Create a user
router.post('/signup', signup);

//sign in
router.post('/signin');

//Google Authentication
router.post('/google');

export default router;
