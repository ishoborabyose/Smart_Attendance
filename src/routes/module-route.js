import express from 'express';
import moduleValidation from '../middlewares/module-validation';
import moduleController from '../controllers/module.controller';


const router = express.Router();
router.post('/register/module', moduleValidation, moduleController.createModule);

export default router;