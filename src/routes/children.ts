import {NextFunction, Request, Response, Router} from 'express';
import { createChild, deleteChild, getAllChildren, getChild, updateChild } from '../controllers/childrenController';

const router = Router();



router.get('/', getAllChildren);
router.post('/', createChild);
router.get('/:id', getChild);
router.put('/:id', updateChild);
router.delete('/:id', deleteChild)


export default router;