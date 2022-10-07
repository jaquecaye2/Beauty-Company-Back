import joi from "joi";
import { typeScheduleData } from "../types/scheduleType";

const scheduleSchema = joi.object<typeScheduleData>({
  date: joi.date().required().label("Data inválida"),
  hour: joi.number().required().label("Hora inválida"),
  clients_id: joi.number().required().label("Cliente inválido"),
  professionals_id: joi.number().required().label("Profissional inválido"),
  services_id: joi.number().required().label("Serviço inválido"),
});

export default scheduleSchema;
