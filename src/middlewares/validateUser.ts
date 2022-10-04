import { NextFunction, Request, Response } from "express";

import { findById } from "../repositories/usersRepository";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

async function validateUser(
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
    const { id } = Jwt.verify(token, secretKey) as { id: number };

    const user = await findById(id);

    response.locals.user = user;

    next();
  } catch (error) {
    throw {
      code: "Unauthorized",
      message: "Invalid token. Login required.",
    };
  }
}

export default validateUser;
