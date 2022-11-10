import { Router } from 'express';
const router = new Router();
import Admin from '../models/Admin.js';

router.post('/createAdmin', async (req,res) => {
    const admin = new Admin({...req.body})
    await admin.save()
    res.send(admin)
})

export default router