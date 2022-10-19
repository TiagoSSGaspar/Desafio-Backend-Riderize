import { expect, test } from "vitest";
import { randomUUID } from "node:crypto";
import { User } from "./User";

test('Should be able to create a user', () => {
  const user = new User({
    id: randomUUID(),
    name: "Tiago 900",
    email: "tiago900@email.com",
    password: "123456"
  })

  expect(user).toBeInstanceOf(User)
  expect(user.id).not.toBeUndefined()
  expect(user.id).not.toEqual("")

});

test('Should not be able to create a user if password minimum not reached', () => {

  expect(() => {
    new User({
      id: randomUUID(),
      name: "Tiago 900",
      email: "tiago900@email.com",
      password: "12345"
    })
  }).toThrow()

});

