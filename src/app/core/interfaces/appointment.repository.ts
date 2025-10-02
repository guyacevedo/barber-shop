import { AppointmentStatus } from '../enums';
import { Appointment } from '../models';

export interface AppointmentRepository {
  create(appointment: Appointment): Promise<void>;
  getById(id: string): Promise<Appointment | null>;
  update(appointment: Partial<Appointment>): Promise<void>;
  getForClient(clientId: string): Promise<Appointment[]>;
  getForSpecialist(specialistId: string): Promise<Appointment[]>;
  getCompletedForClient(clientId: string): Promise<Appointment[]>;
  getForSpecialistByStatuses(specialistId: string, statuses: AppointmentStatus[]): Promise<Appointment[]>;
  getAppointmentsBySpecialistAndDateRange(specialistId: string, startDate: Date, endDate: Date): Promise<Appointment[]>;
  getAppointmentsByClientAndDateRange(clientId: string, startDate: Date, endDate: Date): Promise<Appointment[]>;
}