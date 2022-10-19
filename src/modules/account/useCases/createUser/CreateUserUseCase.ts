import { hash } from "bcrypt";
import { AppError } from "../../../../shared/errors/AppError";
import { User, UserProps } from "../../graphql/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


export class CreateUserUseCase {

  constructor(private usersRepository: IUsersRepository) { }

  async execute({ name, email, password }: UserProps): Promise<User> {

    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new AppError("User  already exist!")
    }

    const passwordHash = await hash(password, 7)

    return await this.usersRepository.create({ name, email, password: passwordHash })
  }

}
