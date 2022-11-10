import { Router } from 'express';
import bcrypt from 'bcryptjs';
const router = new Router();
import Admin from '../models/Admin.js';

router.post('/createAdmin', async (req,res) => {
    const saltRounds = 10
    const password = req.body.password
    const hash = bcrypt.hashSync(password, saltRounds);
    const admin = new Admin({...req.body, password: hash})
    await admin.save()
    res.send(admin)
})

export default router