import { companies } from "@prisma/client";

export type typeCompanyData = Omit<companies, "id" | "createdAt">