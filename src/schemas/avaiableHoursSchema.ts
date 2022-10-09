import joi from "joi";

const avaiableHoursSchema = joi.object({
  date: joi.date().required().label("Data inválida"),
  professionals_id: joi.number().required().label("Profissional inválido")
});

export default avaiableHoursSchema;
