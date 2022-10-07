import { Request, Response } from "express";
import { createSectorService, showSectorsService } from "../services/sectorService";

import { typeSectorData } from "../types/sectorType";

export async function createSector(request: Request, response: Response) {
  const sector: typeSectorData = request.body;

  const success = await createSectorService(sector);

  if (success === "success") {
    return response.status(201).send("Setor criado com sucesso");
  }

  response.status(500).send();
}

export async function showSectors(request: Request, response: Response) {
  const result = await showSectorsService();

  if (result) {
    return response.status(200).send(result);
  }

  response.status(500).send();
}
