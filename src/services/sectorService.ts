import {
  findAll,
  findByName,
  insertSector,
} from "../repositories/sectorRepository";
import { typeSectorData } from "../types/sectorType";

export async function createSectorService(sector: typeSectorData) {
  const findSector = await findByName(sector.name);

  if (findSector) {
    throw {
      code: "Unauthorized",
      message: "Setor já cadastrado",
    };
  }

  await insertSector(sector);

  return "success";
}

export async function showSectorsService() {
  const result = await findAll();
  return result;
}
