import { Router } from 'express';
import forgotPasswordController from '../controllers/forgotPasswordController.js';

const router = Router();

router.post('/forgotPW', forgotPasswordController);

export default router;