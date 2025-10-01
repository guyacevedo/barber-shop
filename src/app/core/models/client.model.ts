import { UserBase } from "./user-base.model";

export interface Client extends UserBase {
  // medicalRecordId: string;
  height?: number;
  weight?: number;
}