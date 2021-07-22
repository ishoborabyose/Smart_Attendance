import express from 'express';
import AccessController from '../controllers/access-controller';
import validation from '../middlewares/access-validation';
import checkLogin from '../helpers/checkLogin';

const accessRouter = express.Router();

accessRouter.post('/access', checkLogin, validation, AccessController.access)
accessRouter.get('/access/all', checkLogin, AccessController.getAll)

export default accessRouter;