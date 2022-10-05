import joi from "joi";
import { typeServiceData } from "../types/serviceType";

const serviceSchema = joi.object<typeServiceData>({
  name: joi.string().required().label("Nome inválido"),
  description: joi.string().allow(null),
  price: joi.number().required().label("Preço inválido"),
  sector_id: joi.number().required().label("Setor inválido"),
});

export default serviceSchema;
