import { Request, Response } from 'express';

import UsersRepository from '../repositories/UsersRepository';

const usersRepository = new UsersRepository();

class UsersController {
  async index(request: Request, response: Response): Promise<Response> {
    const users = usersRepository.getAll();

    return response.json(users);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const users = usersRepository.getOneById(id);

    return response.json(users);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { email, name, age, password } = request.body;

    const users = usersRepository.createUser({ email, name, age, password });

    return response.json(users);
  }
}

export default UsersController;
