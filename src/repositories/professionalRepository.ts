import { prisma } from "../config/database";
import { typeProfessionalData } from "../types/professionalType";

export async function findByIdProfessional(id: number) {
  const result = await prisma.professionals.findUnique({ where: { id } });
  return result;
}

export async function findByIdProfessionalSector(id: number) {
  const result = await prisma.professionals.findMany({ where: { sectors_id: id } });
  return result;
}

export async function findByEmail(email: string) {
  const result = await prisma.professionals.findUnique({ where: { email } });
  return result;
}

export async function findAll() {
  const result = await prisma.professionals.findMany({
    select: {
      id: true,
      image: true,
      name: true,
      phone: true,
    },
  });
  return result;
}

export async function insertProfessional(professional: typeProfessionalData) {
  await prisma.professionals.create({ data: professional });
}

export async function updateProfessional(id: number, professional: typeProfessionalData) {
  await prisma.professionals.update({ where: { id }, data: professional });
}

export async function deleteProfessional(id: number) {
  await prisma.professionals.delete({ where: { id } });
}
