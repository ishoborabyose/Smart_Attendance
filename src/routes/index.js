import { Router } from 'express';
import lectureRoute from './lecture.route'
import studentRoute from './student.route'


const router = Router();

router.use('/api', lectureRoute);
router.use('/api', studentRoute);

export default router;