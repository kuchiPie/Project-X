import { Router } from 'express';
import Student from '../models/Student.js';
const router = new Router();
import generator from 'generate-password';
import Session from '../models/Session.js'
import adminAuth from '../middleware/adminAuth.js'
import bcrypt from 'bcryptjs';
import adminLoginController from '../controllers/adminLoginController.js';

router.post('/admin/login', adminLoginController)

var salt = bcrypt.genSaltSync(10);

router.post('/createStudentProfiles', adminAuth, async (req, res) => {
    const userdata = req.body
    
    Object.keys(userdata.branches).forEach(async (branch) => {
        for(let i=1; i<=userdata.branches[branch]; i++){
            let rollno = ""
            if(i<10){
                rollno = `00${i}`
            } else if(i>=10 && i<100){
                rollno = `0${i}`
            } else {
                rollno = "i"
            }
    
            let email = `${userdata.year}${branch}${rollno}@iiitdwd.ac.in`
            var password = generator.generate({
                length: 10,
                numbers: true
            });
    
            var hash = bcrypt.hashSync(password, salt);
    
            const newstudent = new Student({email, password: hash, rollno: `${userdata.year}${branch}${rollno}`, branch, batch: `20${userdata.year}`});
    
            await newstudent.save()
            console.log(email, password)
        }
    })

    const session = new Session({year: `20${userdata.year}`, cse: userdata.branches.bcs, dsai: userdata.branches.bds, ece: userdata.branches.bec})
    await session.save()

    res.send(session)
})

router.get('/getSessions', async(req, res) => {
    const sessions = await Session.find({})
    res.send(sessions)
})

router.patch('/editStudentAdmin/:id', adminAuth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['altEmail', 'mobileNo']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!'})
    }

    let student = await Student.findById(req.params.id)
    updates.forEach((update) => student[update] = req.body[update]) 
    await student.save()
    console.log(student)
    res.send(student)
})

router.delete('/deleteStudent/:id', adminAuth, async (req, res) => {
    const studentid = req.params.id
    let student = await Student.findById(req.params.id)
    try{
        await Student.deleteOne({_id: studentid})
        res.status(200).send(student)
    } catch(error){
        res.status(400).send(error)
    }
})

export default router