import { prismaClient } from "../../../database/PrismaClient"
import { UserProps } from "../graphql/entities/User"
import { IUsersRepository } from "./IUsersRepository"



export class UsersRepository implements IUsersRepository {

  async create({ name, email, password }: UserProps) {

    return prismaClient.user.create({
      data: {
        name,
        email,
        password,
      }
    })
  }

  async findById(id: string){
    return await prismaClient.user.findFirst({where: {id}})
  }

  async findByEmail(email: string) {
    return await prismaClient.user.findFirst({where: {email}})
  }

}

