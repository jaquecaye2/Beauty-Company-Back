import { prisma } from "../config/database";

export async function findById(id: number) {
  const result = await prisma.companies.findUnique({ where: { id } });
  return result;
}

export async function findByEmail(email: string) {
  const result = await prisma.companies.findUnique({ where: { email } });
  return result;
}