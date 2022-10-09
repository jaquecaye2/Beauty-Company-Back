import { schedule } from "@prisma/client";

export type typeScheduleData = Omit<schedule, "id">

export type typeHourData = Omit<schedule, "id" | "hour" | "clients_id" | "services_id">