import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { User } from "../modules/bikeRide/entities/User";
import { IPrismaService } from "../modules/bikeRide/repository/IUsersRepository";

@Resolver()
export class UserResolver {

  constructor(private prisma: IPrismaService) { }

  @Query(() => User)
  async users() {
    return "Hello Word!!";
  }

  @Mutation()
  async createUser() {
    return "Hello Word!!";
  }

}
