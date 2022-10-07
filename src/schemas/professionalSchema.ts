import joi from "joi";
import { typeProfessionalData } from "../types/professionalType";

const professionalSchema = joi.object<typeProfessionalData>({
  number: joi.string().max(5).required(),
  image: joi.string().uri().required(),
  name: joi.string().required(),
  birthdate: joi.date().required(),
  cpf: joi.string().min(11).max(20).required(),
  sex: joi.string().required().valid("female", "male", "other"),
  street: joi.string().required(),
  complement: joi.string().allow(null),
  district: joi.string().required(),
  city: joi.string().required(),
  state: joi.string().required(),
  phone: joi.string().min(10).required().label("Informe um telefone válido"),
  email: joi.string().email().required().label("Formato do e-mail deve ser válido"),
  office: joi.string().required(),
  sectors_id: joi.number().required().label("Informe um setor válido")
})

export default professionalSchema;
