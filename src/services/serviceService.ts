
import { findAll, findAllAll, findByName, insertService } from "../repositories/serviceRepository";
import { typeServiceData } from "../types/serviceType";

export async function createServiceService(service: typeServiceData) {
  const findService = await findByName(service.name);

  if (findService) {
    throw {
      code: "Unauthorized",
      message: "Serviço já cadastrado",
    };
  }

  service.sector_id = Number(service.sector_id)
  service.price = Number(service.price)

  await insertService(service);

  return "success";
}

export async function showAllServicesService() {
  const result = await findAllAll();
  return result;
}

export async function showServicesService(id: number) {
  const result = await findAll(id);
  return result;
}
