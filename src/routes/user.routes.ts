import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const userRouter = Router();

const usersController = new UsersController();

userRouter.get('/', usersController.index);
userRouter.get('/:id', usersController.show);
userRouter.post('/', usersController.create);
userRouter.put('/:id', usersController.update);
userRouter.delete('/:id', usersController.delete);

export default userRouter;
