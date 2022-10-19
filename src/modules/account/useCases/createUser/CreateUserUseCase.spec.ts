
import { beforeEach, describe, expect, it } from "vitest";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";


import { CreateUserUseCase } from "./CreateUserUseCase";

describe('Create user', () => {

  let usersRepositoryInMemory: UsersRepositoryInMemory;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
  });

  it('Should be able create a new user ', async () => {

    const user = await createUserUseCase.execute({
      name: "Tiago 900",
      email: "tiago900@email.com",
      password: "123456"
    });

    expect(user).toHaveProperty("id")
    expect(user.id).not.toBeUndefined()

  });

  it('Should not able create a new user with same email', async () => {

    const user = await createUserUseCase.execute({
      name: "Tiago 900",
      email: "tiago900@email.com",
      password: "123456"
    });


  });

});
