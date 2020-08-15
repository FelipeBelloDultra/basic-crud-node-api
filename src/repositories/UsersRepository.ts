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

  public updateUser({ email, age, name, password, id }: User) {
    const findUser = this.users.findIndex((user) => user.id === id);

    const updatedUser = new User({ email, age, name, password });

    this.users[findUser] = updatedUser;

    return updatedUser;
  }

  public deleteUser(id: string): string {
    const findUser = this.users.findIndex((user) => user.id === id);

    this.users.splice(findUser, 1);

    return 'deleted';
  }
}

export default UsersRepository;
