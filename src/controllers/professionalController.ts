import { Request, Response } from "express";
import { createProfessionalService, deleteProfessionalService, showProfessionalService, showProfessionalsService, showProfessionalsWithSectorService, updateProfessionalService } from "../services/professionalService";
import { typeProfessionalData } from "../types/professionalType";

export async function createProfessional(request: Request, response: Response) {
  const professional: typeProfessionalData = request.body;

  const success = await createProfessionalService(professional);

  if (success === "success") {
    return response.status(201).send("Profissional criado com sucesso");
  }

  response.status(500).send();
}

export async function showProfessionals(request: Request, response: Response) {
  const result = await showProfessionalsService();

  if (result) {
    return response.status(200).send(result);
  }

  response.status(500).send();
}

export async function showProfessional(request: Request, response: Response) {
  const id_professional = Number(request.params.id);

  const result = await showProfessionalService(id_professional);

  if (result) {
    return response.status(200).send(result);
  }

  response.status(500).send();
}

export async function updateProfessional(request: Request, response: Response) {
  const id_professional = Number(request.params.id);
  const professional: typeProfessionalData = request.body;

  const result = await updateProfessionalService(id_professional, professional);

  if (result === "success") {
    return response.status(200).send("Profissional atualizado com sucesso");
  }

  response.status(500).send();
}

export async function deleteProfessional(request: Request, response: Response) {
  const id_professional = Number(request.params.id);

  const result = await deleteProfessionalService(id_professional);

  if (result === "success") {
    return response.status(200).send("Profissional deletado com sucesso");
  }

  response.status(500).send();
}

export async function showProfessionalsWithSector(request: Request, response: Response) {
  const id_sector = Number(request.params.id_sector);

  const result = await showProfessionalsWithSectorService(id_sector);

  if (result) {
    return response.status(200).send(result);
  }

  response.status(500).send();
}