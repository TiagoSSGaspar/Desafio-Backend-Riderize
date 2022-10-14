import { Resolver, Query, Arg } from "type-graphql";

@Resolver()
export class UserResolver {

  @Query(() => String)
  async users() {
    return "Hello Word!!";
  }
}
