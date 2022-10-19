import { User, UserProps } from "../graphql/entities/User"


export interface IUsersRepository {
  create(data: UserProps): Promise<any>
  findById(id: string): Promise<any>
  findByEmail(email: string): Promise<any>
}

