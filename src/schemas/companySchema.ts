import joi from "joi";
import { typeCompanyData } from "../types/companyType";

const loginSchema = joi.object<typeCompanyData>({
  email: joi.string().email().required().label("E-mail inválido"),
  password: joi.string().required().label("Senha inválida"),
});

export default loginSchema;
