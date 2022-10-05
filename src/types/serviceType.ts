import { services } from "@prisma/client";

export type typeServiceData = Omit<services, "id">