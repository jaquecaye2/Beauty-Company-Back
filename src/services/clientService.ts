import bcrypt from "bcrypt";
import {
  deleteClientBD,
  findAll,
  findByEmailClient,
  findByIdClient,
  insertClient,
  updateClient,
} from "../repositories/clientsRepository";
import { typeClientData } from "../types/clientType";
import { clients } from "@prisma/client";

export async function createClientService(client: typeClientData) {
  const findClient = await findByEmailClient(client.email);

  if (findClient) {
    throw {
      code: "Unauthorized",
      message: "E-mail já cadastrado",
    };
  }

  const salt: number = 10;
  const password_hash: string = bcrypt.hashSync(client.password, salt);

  client.password = password_hash;

  await insertClient(client);

  return "success";
}

export async function showClientsService() {
  const result = await findAll();
  return result;
}

export async function showClientService(id: number) {
  const result = await findByIdClient(id);

  if (!result) {
    throw {
      code: "NotFound",
      message: "Informe um cliente válido",
    };
  }

  return result;
}

export async function updateClientService(id: number, client: typeClientData) {
  const result = await findByIdClient(id);

  if (!result) {
    throw {
      code: "NotFound",
      message: "Informe um cliente válido",
    };
  }

  const salt: number = 10;
  const password_hash: string = bcrypt.hashSync(client.password, salt);

  client.password = password_hash;

  await updateClient(id, client);

  return "success";
}

export async function deleteClientService(id: number) {
  const result = await findByIdClient(id);

  if (!result) {
    throw {
      code: "NotFound",
      message: "Informe um cliente válido",
    };
  }

  await deleteClientBD(id)

  return "success";
}

export async function showMyProfile(client: clients) {
  const id = client.id

  const result = await findByIdClient(id);

  if (!result) {
    throw {
      code: "NotFound",
      message: "Informe um cliente válido",
    };
  }

  return result;
}

