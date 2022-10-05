import { prisma } from "../config/database";
import { typeClientData } from "../types/clientType";

export async function findById(id: number) {
  const result = await prisma.clients.findUnique({ where: { id } });
  return result;
}

export async function findByEmail(email: string) {
  const result = await prisma.clients.findUnique({ where: { email } });
  return result;
}

export async function findAll() {
  const result = await prisma.clients.findMany({
    select: {
      image: true,
      name: true,
      phone: true,
    },
  });
  return result;
}

export async function insertClient(client: typeClientData) {
  const result = await prisma.clients.create({ data: client });
  console.log(result);
}

export async function updateClient(id: number, client: typeClientData) {
  await prisma.clients.update({ where: { id }, data: client });
}

export async function deleteClientBD(id: number) {
  await prisma.clients.delete({ where: { id } });
}
