import express from 'express';
import registerValidation from '../middlewares/registerValidation';
import lecturesController from '../controllers/lecture.controller';

const router = express.Router();

router.post('/register',registerValidation, lecturesController.register)

export default router;