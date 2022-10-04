import { NextFunction, Request, Response } from "express";

export default async function errorHandler(error: any, request: Request, response: Response, next: NextFunction) {
  if (error.code === "NotFound") {
    return response.status(404).send(error.message);
  } else if (error.code === "Unauthorized"){
    return response.status(401).send(error.message);
  } else if (error.code === "Unprocessable"){
    return response.status(422).send(error.message)
  }
  response.sendStatus(500);
}