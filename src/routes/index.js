import { Router } from 'express';
import lectureRoute from './lecture.route';
import studentRoute from './student.route';
import cardRoute from './card.route';
import attendedStudentRoute from './attendedStudent.route';
import accessRouter from './access-route';
import deviceRouter from './device-route';
import collegeRouter from './college.route';
import departmentRouter from './department-route';
import facultyRouter from './faculty-route'


const router = Router();

router.use('/api', lectureRoute);
router.use('/api', studentRoute);
router.use('/api', cardRoute);
router.use('/api', attendedStudentRoute);
router.use('/api', accessRouter);
router.use('/api', deviceRouter);
router.use('/api/', collegeRouter);
router.use('/api/', departmentRouter);
router.use('/api/', facultyRouter)
export default router;