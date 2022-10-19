import {NextFunction, Request, Response, Router} from 'express';
import { createParent, deleteParent, getAllParents, getParent, updateParent } from '../controllers/parentController';

const router = Router();



router.get('/', getAllParents);
router.post('/', createParent);
router.get('/:id', getParent);
router.put('/:id', updateParent);
router.delete('/:id', deleteParent)


export default router;