import {NextFunction, Request, Response, Router} from 'express';
import { createUser, deleteUser, getAllUsers, getUser, loginUser, updateUser } from '../controllers/userController';

const router = Router();



router.get('/', getAllUsers);

router.post('/add', createUser);

router.get('/:userId', getUser);

router.put('/edit/:userId', updateUser);

router.delete('/delete/:userId', deleteUser);

router.post('/login', loginUser)


export default router;