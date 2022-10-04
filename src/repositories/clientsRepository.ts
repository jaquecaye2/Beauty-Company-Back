import { prisma } from "../config/database";
import { typeClientData } from "../types/clientType";

export async function findById(id: number) {
  const result = await prisma.clients.findUnique({ where: { id } });
  return result;
}

export async function insertUser(userData: typeClientData) {
    await prisma.clients.create({data: userData})
}
