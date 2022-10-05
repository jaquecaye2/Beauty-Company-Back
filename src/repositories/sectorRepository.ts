import { prisma } from "../config/database";

import { typeSectorData } from "../types/sectorType";

export async function findById(id: number) {
  const result = await prisma.sectors.findUnique({ where: { id } });
  return result;
}

export async function findByName(name: string) {
  const result = await prisma.sectors.findUnique({ where: { name } });
  return result;
}

export async function findAll() {
  const result = await prisma.sectors.findMany();
  return result;
}

export async function insertSector(sector: typeSectorData) {
  const result = await prisma.sectors.create({ data: sector });
  return result;
}
