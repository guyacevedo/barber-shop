import {
  Sex,
  UserRoles,
  UserStatus,
} from './index';

// Sex
export const SEX_LABELS = new Map<string, string>([
  [Sex.MALE, 'Masculino'],
  [Sex.FEMALE, 'Femenino'],
  [Sex.OTHER, 'Otro'],
  [Sex.UNSPECIFIED, 'Sin especificar'],
]);

// Role
export const ROLE_LABELS = new Map<string, string>([
  [UserRoles.ADMIN, 'Administrador'],
  [UserRoles.CLIENT, 'Cliente'],
  [UserRoles.SPECIALIST, 'Especialista'],
  [UserRoles.USER, 'Usuario'],
]);

// Status
export const STATUS_LABELS = new Map<string, string>([
  [UserStatus.ACTIVE, 'Activo'],
  [UserStatus.INACTIVE, 'Inactivo'],
  [UserStatus.DISABLED, 'Inhabilitado'],
]);

// Utility function to get the label from any enum-labels Map
export function getEnumLabel<T extends string>(map: Map<T, string>, value: T | undefined | null): string {
  if (!value) return 'Sin especificar';
  return map.get(value) ?? value;
}