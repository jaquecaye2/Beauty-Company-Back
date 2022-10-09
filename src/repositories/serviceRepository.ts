import { prisma } from "../config/database";

import { typeServiceData } from "../types/serviceType";

export async function findByIdService(id: number) {
  const result = await prisma.services.findUnique({ where: { id } });
  return result;
}

export async function findByName(name: string) {
  const result = await prisma.services.findUnique({ where: { name } });
  return result;
}

export async function findAll(id: number) {
  const result = await prisma.services.findMany({ where: { sector_id: id } });
  return result;
}

export async function findAllAll() {
  const result = await prisma.services.findMany({
    include: { sectors: { select: { name: true } } },
  });
  return result;
}

export async function insertService(service: typeServiceData) {
  const result = await prisma.services.create({ data: service });
  return result;
}
