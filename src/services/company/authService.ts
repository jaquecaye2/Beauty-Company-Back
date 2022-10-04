import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { typeCompanyData } from "../../types/companyType";

import { findByEmail } from "../../repositories/companiesRepository";

export async function loginCompany(company: typeCompanyData) {
  dotenv.config();

  const email: string = company.email;

  const findCompany = await findByEmail(email);

  if (!findCompany) {
    throw {
      code: "Unauthorized",
      message: "E-mail ou senha incorretos",
    };
  }

  if (findCompany.password !== company.password) {
    throw {
      code: "Unauthorized",
      message: "E-mail ou senha incorretos",
    };
  }

  const iduser: number = findCompany.id;
  const secretKey: string = process.env.SECRET_KEY || "";
  const config = { expiresIn: 86400 };

  const token = Jwt.sign({ id: iduser }, secretKey, config);

  return token;
}
