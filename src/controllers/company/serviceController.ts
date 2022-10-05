import { Request, Response } from "express";
import {
  createServiceService,
  showServicesService,
} from "../../services/company/serviceService";

import { typeServiceData } from "../../types/serviceType";

export async function createService(request: Request, response: Response) {
  const service: typeServiceData = request.body;

  const success = await createServiceService(service);

  if (success === "success") {
    return response.status(201).send("Serviço criado com sucesso");
  }

  response.status(500).send();
}

export async function showServices(request: Request, response: Response) {
  const result = await showServicesService();

  if (result) {
    return response.status(200).send(result);
  }

  response.status(500).send();
}
