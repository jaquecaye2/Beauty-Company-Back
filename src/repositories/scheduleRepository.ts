import { prisma } from "../config/database";

import { typeScheduleData } from "../types/scheduleType";

export async function findAll() {
  const result = await prisma.schedule.findMany();
  return result;
}

export async function findByHourAndDate(hour: number, date: any, professionals_id: number) {
  const result = await prisma.schedule.findFirst({where: {hour, date, professionals_id}})
  return result
}

export async function insertSchedule(schedule: typeScheduleData) {
  const result = await prisma.schedule.create({ data: schedule });
  return result;
}
