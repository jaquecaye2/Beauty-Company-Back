import { Request, Response } from "express";
import { loginCompany } from "../../services/company/authService";

import { typeCompanyData } from "../../types/companyType";

export async function signin(request: Request, response: Response) {
  const user: typeCompanyData = request.body;

  const token = await loginCompany(user);

  if (token) {
    return response.status(200).send(token);
  }

  response.status(500).send();
}
