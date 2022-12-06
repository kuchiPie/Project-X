import { Router } from 'express';
const router = new Router();
import { getStudentListController, createStudentController, updateStudentController, deleteStudentController, getStudentByIDController } from '../controllers/studentController.js'
import studentLoginController from '../controllers/studentLoginController.js';

router.post('/student/login', studentLoginController)

router.get('/student/:id', getStudentByIDController)

router.get('/student', getStudentListController)

router.post('/student', createStudentController)

router.patch('/student/:id', updateStudentController)

router.delete('/student/:id', deleteStudentController)


export default router;