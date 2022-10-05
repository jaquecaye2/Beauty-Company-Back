import joi from "joi";
import { typeSectorData } from "../types/sectorType";

const sectorSchema = joi.object<typeSectorData>({
  name: joi.string().required().label("Nome inválido"),
});

export default sectorSchema;