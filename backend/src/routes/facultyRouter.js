import { Router } from 'express';
const router = new Router();
import { deleteFacultyController, getFacultyController, insertFacultyController, outpassApproval, updateFacultyController } from '../controllers/facultyController.js';
import facultyLoginController from '../controllers/facultyLoginController.js';
import adminAuth from '../middleware/adminAuth.js'
import Faculty from '../models/Faculty.js';
import Student from '../models/Student.js';

router.post('/faculty/login' , facultyLoginController)

router.post('/faculty',adminAuth,insertFacultyController)

router.get('/faculty',adminAuth , getFacultyController)

router.patch('/faculty/:id',  updateFacultyController)

router.delete('/faculty/:id', deleteFacultyController)

router.post('/faculty/approval', outpassApproval)
router.get('/getHistoricOutpasses', async (req, res) => {
    const studentId = req.query.id

    var student = await Student.findById(studentId)
    console.log(student)

    Student.findById(studentId).populate('outpasses').exec((_err, post) => {
        console.log(post, "Done??");
        var allOutpasses = post.outpasses;
        var historicOutpasses = []
        allOutpasses.forEach((element)=>{
            if (element.isApproved == true || element.isRejected == true){
                historicOutpasses.push(element)
            }
        })
        res.send(historicOutpasses)
    })
})

router.get('/getAllPendingOutpasses', async (req,res) => {
    const facultyId = req.query.id
    try{
        // console.log(Faculty.findById(facultyId).islean())
        Faculty.findById(facultyId).populate('outpasses').exec((_err, post) => {
            // console.log(post, "Done??");
            // var allOutpasses = post.outpasses;
            // var historicOutpasses = []
            // allOutpasses.forEach((element)=>{
            //     if (element.isApproved == true || element.isRejected == true){
            //         historicOutpasses.push(element)
            //     }
            // })
            res.send(post.outpasses)
        })
    }
    catch(err){
        res.send('Error').status(400)
    }
    
})


export default router




// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await faculty.findById(_id)

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.patch('/users/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const user = await faculty.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/faculty/:id', async (req, res) => {
//     try {
//         const user = await faculty.findByIdAndDelete(req.params.id)

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })
