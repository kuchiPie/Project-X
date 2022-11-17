import { Router } from 'express';
const router = new Router();
import {getStudentListController, createStudentController, updateStudentController, deleteStudentController} from '../controllers/studentController.js'


router.get('/student', getStudentListController)

router.post('/student', createStudentController)

router.patch('/student/:id', updateStudentController)

router.delete('/student/:id', deleteStudentController)


export default router;