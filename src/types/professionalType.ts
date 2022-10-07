import { professionals } from "@prisma/client";

export type typeProfessionalData = Omit<professionals, "id" | "admissiondate">