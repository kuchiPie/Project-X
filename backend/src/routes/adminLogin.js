import { Router } from 'express';
const router = new Router();
import adminLoginController from '../controllers/adminLoginController.js';

router.post('/admin/login', adminLoginController)

export default router