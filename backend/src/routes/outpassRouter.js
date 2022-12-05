import { Router } from 'express';
const router = new Router();
import {createNewOutpass,getAllOutpass, getcurrentOutpass} from '../controllers/outpassController.js'

router.route('/').get(getAllOutpass);
router.route('/').post(createNewOutpass);
router.route('/current/:id').get(getcurrentOutpass)

export default router