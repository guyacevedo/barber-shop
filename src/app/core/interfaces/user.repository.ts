import { Client, Specialist, UserBase } from '../models';

export interface UserRepository {
  createUser(user: Client | Specialist): Promise<void>;
  dniExists(dni: string): Promise<boolean>;
  getUserById(id: string): Promise<UserBase | null>;
  getUsersByIds(ids: string[]): Promise<UserBase[]>;
  getUserByUId(uid: string): Promise<UserBase | null>;
  getUsersByRole(role: string): Promise<UserBase[]>;
  updateUser(updatedData: Partial<Client | Specialist>): Promise<void>;
}
