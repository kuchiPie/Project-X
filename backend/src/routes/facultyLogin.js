import { Router } from 'express';
const router = new Router();
import facultyLoginController from '../controllers/facultyLoginController.js';

router.post('/faculty/login', facultyLoginController)

export default router