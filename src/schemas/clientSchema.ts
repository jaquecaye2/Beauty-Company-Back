import joi from "joi";
import { typeClientData } from "../types/clientType";

const clientSchema = joi.object<typeClientData>({
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
  password: joi.string().min(10).required().label("Senha deve possuir no mínimo 10 caracteres"),
});

export default clientSchema;
