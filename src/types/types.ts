import { clients } from '@prisma/client';
import { professionals } from '@prisma/client';
import { sectors } from '@prisma/client';
import { address } from '@prisma/client';
import { services } from '@prisma/client';
import { schedule } from '@prisma/client';

export type TypeAddressData = Omit<address, 'id'>;
export type TypeClientData = Omit<clients, 'id'>;
export type TypeProfessionalData = Omit<professionals, 'id'>;
export type TypeSectorsData = Omit<sectors, 'id'>;
export type TypeServiceData = Omit<services, 'id'>;
export type TypeScheduleData = Omit<schedule, 'id'>;
