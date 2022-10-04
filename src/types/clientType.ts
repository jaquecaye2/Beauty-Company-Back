import { clients } from "@prisma/client";

export type typeClientData = Omit<clients, "id" | "createdAt">