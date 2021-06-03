import express from 'express';
import cardController from '../controllers/card.controller'
import cardValidation from '../middlewares/card.validation'



const router = express.Router();

router.post('/register/card', cardValidation, cardController.register)
router.get('/cards', cardController.getAll)

export default router;