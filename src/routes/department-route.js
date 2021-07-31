import express from 'express';
import departmentController from '../controllers/department-controller';
import departmentValidation from '../middlewares/department-validation'



const router = express.Router();

router.post('/register/department', departmentValidation, departmentController.createDepartment);

export default router;