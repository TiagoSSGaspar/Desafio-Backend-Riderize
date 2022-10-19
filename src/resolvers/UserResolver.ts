import { Resolver, Query, Arg, Mutation, Args } from "type-graphql";
import { User } from "../modules/account/graphql/entities/User";
import { CreateUserInput } from "../modules/account/graphql/inputs/CreateUserInput";
import { IUsersRepository } from "../modules/account/repositories/IUsersRepository";
import { UsersRepository } from "../modules/account/repositories/UsersRepository";

import { CreateUserUseCase } from "../modules/account/useCases/createUser/CreateUserUseCase";


@Resolver()
export class UserResolver {

  repository: IUsersRepository = new UsersRepository()

  @Query(() => User)
  async users() {
    return
  }

  @Mutation(() => User)
  createUser(@Arg("data") data: CreateUserInput): Promise<User> {
    const createUserUseCase  = new CreateUserUseCase(this.repository);

    return  createUserUseCase.execute({ name: data.name, email: data.email, password: data.password })
  }

}
