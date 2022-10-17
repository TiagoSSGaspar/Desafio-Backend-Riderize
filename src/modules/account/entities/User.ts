import { randomUUID } from "node:crypto";
import "reflect-metadata";
import { Field, ID, ObjectType } from "type-graphql";
import { threadId } from "worker_threads";

export interface UserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
}

@ObjectType()
export class User {

  private props: UserProps

  constructor(props: UserProps) {
    const { password} = props;

    if(!props.id) {
      props.id = randomUUID()
    }

    if(password.length < 6) {
      throw new Error("Minimum allowed not reached!")
    }

    this.props = props;
  }

  @Field(() => ID)
  public get id(): string | undefined {
    return this.props.id;
  }

  @Field(() => String)
  public get name(): string {
    return this.props.name;
  }

  @Field(() => String)
  public get email(): string {
    return this.props.email;
  }

  @Field(() => String)
  public get password(): string {
    return this.props.password;
  }

}
