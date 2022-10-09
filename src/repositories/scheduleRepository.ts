import { prisma } from "../config/database";

import { typeScheduleData, typeHourData } from "../types/scheduleType";

export async function findAll(id_professional: number) {
  const result = await prisma.schedule.findMany({where: {professionals_id: id_professional}, select: {
    date: true,
    hour: true,
    clients: {
      select: {
        name: true
      }
    },
    services: {
      select: {
        name: true
      }
    },
    professionals: {
      select: {
        name: true
      }
    }
  }});
  return result;
}

export async function findByHourAndDate(hour: number, date: any, professionals_id: number) {
  const result = await prisma.schedule.findFirst({where: {hour, date, professionals_id}})
  return result
}

export async function findByDateandProfessional(info: typeHourData) {
  const result = await prisma.schedule.findMany({where: {date: info.date, professionals_id: info.professionals_id}})
  return result
}

export async function insertSchedule(schedule: typeScheduleData) {
  const result = await prisma.schedule.create({ data: schedule });
  return result;
}
