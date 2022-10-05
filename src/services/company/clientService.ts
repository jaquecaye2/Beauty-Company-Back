import bcrypt from "bcrypt";

import { findByEmail, insertClient } from "../../repositories/clientsRepository";
import { typeClientData } from "../../types/clientType";

export async function createClientService(client: typeClientData) {
  const findClient = await findByEmail(client.email);

  if (findClient) {
    throw {
      code: "Unauthorized",
      message: "E-mail já cadastrado",
    };
  }

  const salt: number = 10;
  const password_hash: string = bcrypt.hashSync(client.password, salt);

  const clientData = {
    number: client.number,
    image: client.image,
    name: client.name,
    birthdate: client.birthdate,
    cpf: client.cpf,
    sex: client.sex,
    street: client.street,
    complement: client.complement,
    district: client.district,
    city: client.city,
    state: client.state,
    phone: client.phone,
    email: client.email,
    password: password_hash
  };

  await insertClient(clientData);

  return "success";
}
