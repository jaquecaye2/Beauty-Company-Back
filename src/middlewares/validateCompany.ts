import { NextFunction, Request, Response } from "express";

import { findByEmail } from "../repositories/companiesRepository";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

async function validateCompany(
  request: Request,
  response: Response,
  next: NextFunction
) {
  
  dotenv.config();

  const { authorization } = request.headers;

  if (!authorization) {
    throw {
      code: "Unauthorized",
      message: "Missing authorization header",
    };
  }

  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    throw {
      code: "Unauthorized",
      message: "Login required",
    };
  }

  const secretKey: string = process.env.SECRET_KEY || "";

  try {
    const { email } = Jwt.verify(token, secretKey) as { email: string };

    const user = await findByEmail(email);

    if (!user){
      throw {
        code: "Unauthorized",
        message: "Login required",
      };
    }

    response.locals.user = user;

    next();
  } catch (error) {
    throw {
      code: "Unauthorized",
      message: "Invalid token. Login required.",
    };
  }
}

export default validateCompany;
