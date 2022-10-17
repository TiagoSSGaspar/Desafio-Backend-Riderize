import { User, UserProps } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {

  constructor(private usersRepository: IUsersRepository) { }

  async execute({ name, email, password }: UserProps): Promise<User> {

    return await this.usersRepository.create({ name, email, password })
  }

}
