import express from 'express';
import attendedStudentValidation from '../middlewares/attendedStudent.validation';
import attendedStudentController from '../controllers/attendedStudent.controller';
import checkLogin from '../helpers/checkLogin';



const router = express.Router();

router.post('/attendance/student',attendedStudentValidation, attendedStudentController.register);
router.get('/attendance/all', checkLogin, attendedStudentController.getAllStudents);

export default router;