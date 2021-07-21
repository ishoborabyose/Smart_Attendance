import { Router } from 'express';
import lectureRoute from './lecture.route';
import studentRoute from './student.route';
import cardRoute from './card.route';
import attendedStudentRoute from './attendedStudent.route';
import accessRouter from './access-route';


const router = Router();

router.use('/api', lectureRoute);
router.use('/api', studentRoute);
router.use('/api', cardRoute);
router.use('/api', attendedStudentRoute);
router.use('/api', accessRouter)

export default router;