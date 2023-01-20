import { describe, expect, it, beforeEach } from "vitest";
import { CreateUserUseCase } from "./createUserUseCase";
import { User } from "../../../user/entities/User";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("create a new user", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });
  it("should be able possible to create a new user", async () => {
    const user = {
      name: "Name Test",
      email: "teste@email.com",
      birth_date: "12/12/2001",
      cpf: "0000000000",
      password: "ubvqwvwo8wveqc",
    };

    await createUserUseCase.execute(user);

    expect(userRepositoryInMemory.users).toHaveLength(1);
    expect(userRepositoryInMemory.users[0].name).toEqual(user.name);
  });
});