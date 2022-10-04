import { prisma } from "../config/database";

import { TypeUserData } from "../types/userTypes";

export async function findByEmail(email: string) {
  const result = await prisma.users.findUnique({ where: { email } });
  return result;
}

export async function findById(id: number) {
  const result = await prisma.users.findUnique({ where: { id } });
  return result;
}

export async function insertUser(userData: TypeUserData) {
    await prisma.users.create({data: userData})
}
