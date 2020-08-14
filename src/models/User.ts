import { v4 as uuidv4 } from 'uuid';

class User {
  id: string;

  name: string;

  age: number;

  email: string;

  password: string;

  constructor({name, age, email, password}: Omit<User, 'id'>) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }
}

export default User;
