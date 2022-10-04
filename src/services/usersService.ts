import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { findByEmail, insertUser } from "../repositories/usersRepository";
import { TypeUserData } from "../types/userTypes";

export async function createUser(user: TypeUserData) {
  const email: string = user.email;

  const compareEmail = await findByEmail(email);

  if (compareEmail) {
    throw {
      code: "Unauthorized",
      message: "Email already registered",
    };
  }

  const salt: number = 10;
  const password_hash: string = bcrypt.hashSync(user.password, salt);

  const userData = {
    email,
    password: password_hash,
  };

  await insertUser(userData);

  return "success";
}

export async function loginUser(user: TypeUserData) {
  dotenv.config();

  const email: string = user.email;

  const findUser = await findByEmail(email);

  if (!findUser) {
    throw {
      code: "Unauthorized",
      message: "E-mail or password incorrect",
    };
  }

  const passwordVerify = bcrypt.compareSync(user.password, findUser.password);

  if (!passwordVerify) {
    throw {
      code: "Unauthorized",
      message: "E-mail or password incorrect",
    };
  }

  const iduser: number = findUser.id;
  const secretKey: string = process.env.SECRET_KEY || "";
  const config = { expiresIn: 86400 };

  const token = Jwt.sign({ id: iduser }, secretKey, config);

  return token;
}
