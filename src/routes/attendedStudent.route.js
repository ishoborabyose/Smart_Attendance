import express from 'express';
import attendedStudentValidation from '../middlewares/attendedStudent.validation';
import attendedStudentController from '../controllers/attendedStudent.controller'


const router = express.Router();

router.post('/attendance/student',attendedStudentValidation, attendedStudentController.register);

export default router;