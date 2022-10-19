import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import auth from "../../../../config/auth";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface AuthData {
  email: string
  password: string
}

export class AuthUseCase {

  constructor(private usersRepository: IUsersRepository) { }

  async execute({ email, password }: AuthData) {
    const {expires_in_token, secret_token_user } = auth;

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!")
    }

    const token = sign({}, secret_token_user, {
      subject: user.id,
      expiresIn: expires_in_token
    });

    return {
      token
    }

  }

}
