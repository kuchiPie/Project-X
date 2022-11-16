import { Router } from 'express';
import Student from '../models/Student.js';
const router = new Router();
import generator from 'generate-password';
import adminAuth from '../middleware/adminAuth.js'
import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);

router.post('/createStudentProfiles', adminAuth, async (req, res) => {
    const userdata = req.body

    for(let i=1; i<=userdata.num; i++){
        let rollno = ""
        if(i<10){
            rollno = `00${i}`
        } else if(i>=10 && i<100){
            rollno = `0${i}`
        } else {
            rollno = "i"
        }

        let email = `${userdata.year}${userdata.branch}${rollno}@iiitdwd.ac.in`
        var password = generator.generate({
            length: 10,
            numbers: true
        });

        var hash = bcrypt.hashSync(password, salt);

        const newstudent = new Student({email, hash});

        await newstudent.save()
        console.log(email, password)
    }

    res.send()
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