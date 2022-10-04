import joi from "joi";
import { TypeUserData } from "../types/userTypes";

const userSchema = joi.object<TypeUserData>({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
});

export default userSchema;
