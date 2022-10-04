import joi from "joi";
import { typeClientData } from "../types/clientType";

const clientSchema = joi.object<typeClientData>({
  email: joi.string().email().required().label("E-mail inválido"),
  password: joi.string().required().label("Senha inválida"),
});

export default clientSchema;
