
import { findAll, findByName, insertService } from "../repositories/serviceRepository";
import { typeServiceData } from "../types/serviceType";

export async function createServiceService(service: typeServiceData) {
  const findService = await findByName(service.name);

  if (findService) {
    throw {
      code: "Unauthorized",
      message: "Serviço já cadastrado",
    };
  }

  await insertService(service);

  return "success";
}

export async function showServicesService() {
  const result = await findAll();
  return result;
}
