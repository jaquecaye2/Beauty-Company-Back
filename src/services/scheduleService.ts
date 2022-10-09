import { findByIdClient } from "../repositories/clientsRepository";
import { findByIdProfessional } from "../repositories/professionalRepository";
import {
  findAll,
  findByDateandProfessional,
  findByHourAndDate,
  insertSchedule,
} from "../repositories/scheduleRepository";
import { findByIdService } from "../repositories/serviceRepository";
import { typeScheduleData, typeHourData } from "../types/scheduleType";

export async function createScheduleService(schedule: typeScheduleData) {
  const findClient = await findByIdClient(schedule.clients_id);

  if (!findClient) {
    throw {
      code: "NotFound",
      message: "Informe um cliente válido",
    };
  }

  const findProfessional = await findByIdProfessional(
    schedule.professionals_id
  );

  if (!findProfessional) {
    throw {
      code: "NotFound",
      message: "Informe um profissional válido",
    };
  }

  const findService = await findByIdService(schedule.services_id);

  if (!findService) {
    throw {
      code: "NotFound",
      message: "Informe um serviço válido",
    };
  }

  if (findProfessional.sectors_id !== findService.sector_id) {
    throw {
      code: "Unauthorized",
      message: "Profissional escolhido não desempenha o serviço desejado",
    };
  }

  const isAvaiable = await findByHourAndDate(schedule.hour, schedule.date, schedule.professionals_id);

  if (isAvaiable) {
    throw {
      code: "Unauthorized",
      message: "Data e horário não disponivel",
    };
  }

  await insertSchedule(schedule);

  return "success";
}

export async function showSchedulesService(id_professional: number) {
  const result = await findAll(id_professional);
  return result;
}

export async function showAvaiableHours(info: typeHourData) {
  const result = await findByDateandProfessional(info);

  if(!result){
    throw {
      code: "NotFound",
      message: "Não há agendamentos cadastrados para esse dia",
    };
  }

  return result;
}
