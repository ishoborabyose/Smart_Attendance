import express from 'express';
import collegeController  from '../controllers/college-controller';
import collegeValidation from '../middlewares/college-validation'



const router = express.Router();

router.post('/register/college', collegeValidation, collegeController.createCollege);
router.get('/college/all', collegeController.allCollege)

export default router;