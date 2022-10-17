import { User, UserProps } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository{

  private users: User[]

  constructor() {
    this.users = []
  }

  async create({ name, email, password }: UserProps): Promise<User> {
    const user = new User({ name, email, password });

    this.users.push(user)

    return user
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

}

