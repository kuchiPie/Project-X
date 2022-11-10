import { Router } from 'express';
const router = new Router();
import { deleteFacultyController, getFacultyController, insertFacultyController, updateFacultyController } from '../controllers/facultyController.js';

router.post('/faculty', insertFacultyController)

router.get('/faculty', getFacultyController)

router.patch('/faculty/:id', updateFacultyController)

router.delete('/faculty/:id', deleteFacultyController)


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
