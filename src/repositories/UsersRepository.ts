import User from '../models/User';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public getAll() {
    return this.users;
  }
}

export default UsersRepository;
