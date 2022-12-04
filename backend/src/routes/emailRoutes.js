import { Router } from 'express';
import { sendMail } from '../controllers/emailController.js';
const router = Router();

router.get('/mail/send',sendMail);

export default router;