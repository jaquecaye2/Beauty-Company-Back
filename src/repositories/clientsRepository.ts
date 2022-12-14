import { prisma } from "../config/database";
import { typeClientData } from "../types/clientType";

export async function findByIdClient(id: number) {
  const result = await prisma.clients.findUnique({ where: { id } });
  return result;
}

export async function findByEmailClient(email: string) {
  const result = await prisma.clients.findUnique({ where: { email } });
  return result;
}

export async function findAll() {
  const result = await prisma.clients.findMany({
    select: {
      id: true,
      image: true,
      name: true,
      phone: true,
    },
  });
  return result;
}

export async function insertClient(client: typeClientData) {
  await prisma.clients.create({ data: client });
}

export async function updateClient(id: number, client: typeClientData) {
  await prisma.clients.update({ where: { id }, data: client });
}

export async function deleteClientBD(id: number) {
  const result = await prisma.clients.delete({ where: { id } });
  console.log(result)
}
