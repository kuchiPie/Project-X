import { Router } from 'express';
const router = new Router();
import {createNewOutpass,getAllOutpass} from '../controllers/outpassController.js'

router.route('/').get(getAllOutpass);
router.route('/').post(createNewOutpass);

export default router