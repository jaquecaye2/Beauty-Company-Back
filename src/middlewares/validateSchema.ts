import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export function validateSchema(schema: Schema) {
  return (request: Request, response: Response, next: NextFunction) => {
    const validation = schema.validate(request.body);
    if (validation.error) {
      throw { code: "Unprocessable", message: `Erro nas informações enviadas. Verifique: ${validation.error}` };
    }

    next();
  };
}
