import { Request, Response } from "express";

import { TypeUserData } from "../types/userTypes";

import { createUser, loginUser } from "../services/usersService";

export async function signup(request: Request, response: Response) {
  const user: TypeUserData = request.body;

  const success = await createUser(user);

  if (success === "success") {
    return response.status(201).send("Usuário criado com sucesso");
  }

  response.status(500).send();
}

export async function signin(request: Request, response: Response) {
  const user: TypeUserData = request.body;

  const token = await loginUser(user);

  if (token) {
    return response.status(200).send(token);
  }

  response.status(500).send();
}

export async function logout(request: Request, response: Response) {}
