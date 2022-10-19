import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../modules/account/repositories/UsersRepository";
import { AppError } from "../errors/AppError";


interface IPayload {
  sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401)
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_Id } = verify(token, "acfe34b696bc193d2cc07381112335b2") as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_Id);

    if(!user) {
      throw new AppError("User does not exists!", 401)
    }

    request.user = {
      id: user_Id
    }

    next();

  } catch {
    throw new AppError("Invalid token!", 401)
  }

}
