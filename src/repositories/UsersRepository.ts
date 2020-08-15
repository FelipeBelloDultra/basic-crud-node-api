import User from '../models/User';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public getAll(): User[] {
    this.users.forEach(user => {
      delete user.password;
    });

    return this.users;
  }

  public getOneById(id: string): User | undefined {
    const findUser = this.users.find((user) => user.id === id);

    if (findUser) {
      return findUser;
    }
  }

  public createUser({ email, age, name, password }: Omit<User, 'id'>) {
    const user = new User({ email, age, name, password });

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
