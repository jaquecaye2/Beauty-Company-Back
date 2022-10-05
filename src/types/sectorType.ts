import { sectors } from "@prisma/client";

export type typeSectorData = Omit<sectors, "id">