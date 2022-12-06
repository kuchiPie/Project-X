import { Router } from 'express';
const router = new Router();
import {createNewOutpass,getAllOutpass, getcurrentOutpass, withdrawOutpass} from '../controllers/outpassController.js'

router.route('/:id').get(getAllOutpass);
router.route('/').post(createNewOutpass);
router.route('/current/:id').get(getcurrentOutpass)
router.route('/withdraw/:id').delete(withdrawOutpass)

export default router