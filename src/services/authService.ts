import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import { typeCompanyData } from "../types/companyType";

import { findByEmail } from "../repositories/companiesRepository";
import { findByEmailClient } from "../repositories/clientsRepository";

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
  const emailuser: string = findCompany.email
  const secretKey: string = process.env.SECRET_KEY || "";
  const config = { expiresIn: 86400 };

  const token = Jwt.sign({ id: iduser, email: emailuser}, secretKey, config);

  return token;
}

export async function loginClient(client: typeCompanyData) {
  dotenv.config();

  const email: string = client.email;

  const findClient = await findByEmailClient(email);

  if (!findClient) {
    throw {
      code: "Unauthorized",
      message: "E-mail ou senha incorretos",
    };
  }

  const passwordVerify = bcrypt.compareSync(client.password, findClient.password);

  if (!passwordVerify) {
    throw {
      code: "Unauthorized",
      message: "E-mail ou senha incorretos",
    };
  }

  const iduser: number = findClient.id;
  const emailuser: string = findClient.email
  const secretKey: string = process.env.SECRET_KEY || "";
  const config = { expiresIn: 86400 };

  const token = Jwt.sign({ id: iduser, email: emailuser}, secretKey, config);

  return token;
}
