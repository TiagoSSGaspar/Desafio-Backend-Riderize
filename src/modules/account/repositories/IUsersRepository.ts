import { User, UserProps } from "../entities/User"


export interface IUsersRepository {
  create(data: UserProps): Promise<User>
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
}

