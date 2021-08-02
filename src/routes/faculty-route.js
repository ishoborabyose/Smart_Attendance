import express from 'express';
import facultyController from '../controllers/faculty-controller';
import facultyValidation from '../middlewares/faculty-validation';



const router = express.Router();

router.post('/register/faculty', facultyValidation, facultyController.createFaculty);
router.get('/faculty/all', facultyController.allFaculty);
router.delete('/faculty/delete', facultyController.deleteFaculty);

export default router;