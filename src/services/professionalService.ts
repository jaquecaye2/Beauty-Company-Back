import { deleteProfessional, findAll, findByEmail, findByIdProfessional, findByIdProfessionalSector, insertProfessional, updateProfessional } from "../repositories/professionalRepository";
import { findByIdSector } from "../repositories/sectorRepository";

import { typeProfessionalData } from "../types/professionalType";

export async function createProfessionalService(professional: typeProfessionalData) {
  const sector_id = Number(professional.sectors_id)

  const findSector = await findByIdSector(sector_id)

  if (!findSector) {
    throw {
      code: "NotFound",
      message: "Informe um setor válido",
    };
  }
  
  const findProfessional = await findByEmail(professional.email);

  if (findProfessional) {
    throw {
      code: "Unauthorized",
      message: "E-mail já cadastrado",
    };
  }

  professional.sectors_id = sector_id

  await insertProfessional(professional);

  return "success";
}

export async function showProfessionalsService() {
  const result = await findAll();
  return result;
}

export async function showProfessionalService(id: number) {
  const result = await findByIdProfessional(id);

  if (!result) {
    throw {
      code: "NotFound",
      message: "Informe um profissional válido",
    };
  }

  return result;
}

export async function updateProfessionalService(id: number, professional: typeProfessionalData) {
  const result = await findByIdProfessional(id);

  if (!result) {
    throw {
      code: "NotFound",
      message: "Informe um profissional válido",
    };
  }

  await updateProfessional(id, professional);

  return "success";
}

export async function deleteProfessionalService(id: number) {
  const result = await findByIdProfessional(id);

  if (!result) {
    throw {
      code: "NotFound",
      message: "Informe um profissional válido",
    };
  }

  await deleteProfessional(id)

  return "success";
}

export async function showProfessionalsWithSectorService(id: number) {
  const result = await findByIdProfessionalSector(id);

  if (!result) {
    throw {
      code: "NotFound",
      message: "Informe um setor válido",
    };
  }

  return result;
}
