import { Request, Response } from "express";
import { loginClient, loginCompany } from "../services/authService";

import { typeCompanyData } from "../types/companyType";

export async function signincompany(request: Request, response: Response) {
  const user: typeCompanyData = request.body;

  const token = await loginCompany(user);

  if (token) {
    return response.status(200).send(token);
  }

  response.status(500).send();
}

export async function signinclient(request: Request, response: Response) {
  const user: typeCompanyData = request.body;

  const token = await loginClient(user);

  if (token) {
    return response.status(200).send(token);
  }

  response.status(500).send();
}