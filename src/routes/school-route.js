import express from 'express';
import schoolController from '../controllers/school-controller';
import schoolValidation from '../middlewares/school.validation';



const router = express.Router();

router.post('/register/school', schoolValidation, schoolController.createSchool);

export default router;