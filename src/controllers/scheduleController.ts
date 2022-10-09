import { Request, Response } from "express";
import { createScheduleService, showAvaiableHours, showSchedulesService } from "../services/scheduleService";

import { typeScheduleData, typeHourData } from "../types/scheduleType";

export async function createSchedule(request: Request, response: Response) {
  const schedule: typeScheduleData = request.body;

  const success = await createScheduleService(schedule);

  if (success === "success") {
    return response.status(201).send("Agendamento criado com sucesso");
  }

  response.status(500).send();
}

export async function showSchedules(request: Request, response: Response) {
  const id_professional = Number(request.params.id_professional)

  const result = await showSchedulesService(id_professional);

  if (result) {
    return response.status(200).send(result);
  }

  response.status(500).send();
}

export async function showHours(request: Request, response: Response) {
  const info: typeHourData = request.body

  const result = await showAvaiableHours(info);

  if (result) {
    return response.status(200).send(result);
  }

  response.status(500).send();
}
