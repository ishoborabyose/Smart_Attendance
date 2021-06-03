import express from 'express';
import cardController from '../controllers/card.controller'



const router = express.Router();

router.post('/register/card', cardController.register)

export default router;