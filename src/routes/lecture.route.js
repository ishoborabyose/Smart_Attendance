import express from 'express';
import registerValidation from '../middlewares/registerValidation';
import lecturesController from '../controllers/lecture.controller';
import loginValidation from '../middlewares/loginValidation'

const router = express.Router();
router.post('/login', loginValidation, lecturesController.login )
router.post('/register',registerValidation, lecturesController.register)

export default router;