import { Router } from 'express';
import lectureRoute from './lecture.route'
import studentRoute from './student.route'
import cardRoute from './card.route'


const router = Router();

router.use('/api', lectureRoute);
router.use('/api', studentRoute);
router.use('/api', cardRoute)

export default router;