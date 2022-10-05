import { Request, Response } from "express";
import {
  createClientService,
  deleteClientService,
  showClientService,
  showClientsService,
  updateClientService,
} from "../../services/company/clientService";
import { typeClientData } from "../../types/clientType";

export async function createClient(request: Request, response: Response) {
  const client: typeClientData = request.body;

  const success = await createClientService(client);

  if (success === "success") {
    return response.status(201).send("Cliente criado com sucesso");
  }

  response.status(500).send();
}

export async function showClients(request: Request, response: Response) {
  const result = await showClientsService();

  if (result) {
    return response.status(200).send(result);
  }

  response.status(500).send();
}

export async function showClient(request: Request, response: Response) {
  const id_client = Number(request.params.id);

  const result = await showClientService(id_client);

  if (result) {
    return response.status(200).send(result);
  }

  response.status(500).send();
}

export async function updateClient(request: Request, response: Response) {
  const id_client = Number(request.params.id);
  const client: typeClientData = request.body;

  const result = await updateClientService(id_client, client);

  if (result === "success") {
    return response.status(200).send("Cliente atualizado com sucesso");
  }

  response.status(500).send();
}

export async function deleteClient(request: Request, response: Response) {
  const id_client = Number(request.params.id);

  const result = await deleteClientService(id_client);

  if (result === "success") {
    return response.status(200).send("Cliente deletado com sucesso");
  }

  response.status(500).send();
}
