import express from 'express';
import deviceController from '../controllers/device-controller'



const router = express.Router();

router.get('/device', deviceController.createDevice)

export default router;