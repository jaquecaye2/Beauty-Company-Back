import { schedule } from "@prisma/client";

export type typeScheduleData = Omit<schedule, "id">