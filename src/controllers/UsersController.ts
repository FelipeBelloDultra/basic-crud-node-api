import { Request, Response } from 'express';

import UsersRepository from '../repositories/UsersRepository';

const usersRepository = new UsersRepository();

class UsersController {
  async index(request: Request, response: Response): Promise<Response> {
    const users = usersRepository.getAll();

    return response.json(users);
  }
}

export default UsersController;
