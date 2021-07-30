import { Router } from 'express';
import lectureRoute from './lecture.route';
import studentRoute from './student.route';
import cardRoute from './card.route';
import attendedStudentRoute from './attendedStudent.route';
import accessRouter from './access-route';
import deviceRouter from './device-route';
import collegeRouter from './college.route';


const router = Router();

router.use('/api', lectureRoute);
router.use('/api', studentRoute);
router.use('/api', cardRoute);
router.use('/api', attendedStudentRoute);
router.use('/api', accessRouter);
router.use('/api', deviceRouter);
router.use('/api/', collegeRouter);

export default router;