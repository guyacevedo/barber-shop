import { Diagnosis, Rating, Specialty } from '../models';
import { AppointmentStatus, UserRoles } from '../enums/';

export interface Appointment {
  id: string;
  clientId: string;
  specialistId: string;
  specialistFirstName: string,
  specialistLastName: string,
  clientFirstName: string,
  clientLastName: string,
  status: AppointmentStatus;
  date: Date;
  specialty: Specialty;
  creationDate: Date;
  cancellationReason?: string;
  canceledBy?: UserRoles;
  diagnosis?: Diagnosis;
  rating?: Rating;
}