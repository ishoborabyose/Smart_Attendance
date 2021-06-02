import express from 'express';
import studentValidation from '../middlewares/student.Validation';
import studentController from '../controllers/student.controller'


const router = express.Router();

router.post('/register/student',studentValidation, studentController.register)

export default router;