import { Router } from 'express';
// import controller of user
import { createUser, getUsers } from '../controller/user.controller';

const router = Router();

// /api/user/
router.post('/', createUser);
router.get('/', getUsers);
// router.get('/:id', getOneUser);
// router.delete('/:id', deleteOneUser);
// router.put('/:id', updateUser);

export default router;
