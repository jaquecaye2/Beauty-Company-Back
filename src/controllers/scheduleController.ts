import { Request, Response } from "express";
import { createScheduleService, showSchedulesService } from "../services/scheduleService";

import { typeScheduleData } from "../types/scheduleType";

export async function createSchedule(request: Request, response: Response) {
  const schedule: typeScheduleData = request.body;

  const success = await createScheduleService(schedule);

  if (success === "success") {
    return response.status(201).send("Agendamento criado com sucesso");
  }

  response.status(500).send();
}

export async function showSchedules(request: Request, response: Response) {
  const result = await showSchedulesService();

  if (result) {
    return response.status(200).send(result);
  }

  response.status(500).send();
}
