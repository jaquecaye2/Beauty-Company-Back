import { Request, Response } from "express";
import { createClientService } from "../../services/company/clientService";
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

  response.status(500).send();
}

export async function showClient(request: Request, response: Response) {

  response.status(500).send();
}

export async function updateClient(request: Request, response: Response) {

  response.status(500).send();
}

export async function deleteClient(request: Request, response: Response) {

  response.status(500).send();
}
