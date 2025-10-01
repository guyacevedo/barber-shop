import { UserBase, Specialty, Availability } from './index';

export interface Specialist extends UserBase {
  specialties: Specialty[];
  availability: Availability[];
  availabilityName: string; // From "AVAILABILITY_PRESETS_OPTIONS"
}
