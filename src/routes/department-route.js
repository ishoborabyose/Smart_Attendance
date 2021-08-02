import express from 'express';
import departmentController from '../controllers/department-controller';
import departmentValidation from '../middlewares/department-validation'



const router = express.Router();

router.post('/register/department', departmentValidation, departmentController.createDepartment);
router.get('/department/all', departmentController.allDepartment);
router.delete('/department/delete', departmentController.deleteDepartment);

export default router;