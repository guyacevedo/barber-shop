import { Routes } from '@angular/router';
import { roleGuard } from '../../core/guards/role.guard';
import { UserRoles } from '../../core/enums';
import { idGuard } from '../../core/guards/id.guard';
import { recordGuard } from '../../core/guards/record.guard';

export const DASHBOARD_ROUTES: Routes = [
  // Authenticated users with Client role
  {
    path: 'client',
    canActivate: [roleGuard([UserRoles.CLIENT])],
    loadComponent: () =>
      import('./pages/client-page/client-page.component').then(
        (m) => m.ClientPageComponent
      ),
  },
  {
    path: 'request-appointment',
    canActivate: [roleGuard([UserRoles.CLIENT])],
    loadComponent: () =>
      import('./pages/request-appointment-page/request-appointment-page.component').then(
        (m) => m.RequestAppointmentPageComponent
      ),
  },
  // Authenticated users with Specialist role
  {
    path: 'specialist',
    canActivate: [roleGuard([UserRoles.SPECIALIST])],
    loadComponent: () =>
      import('./pages/specialist-page/specialist-page.component').then(
        (m) => m.SpecialistPageComponent
      ),
  },
  // Authenticated users with Client or Specialist role
  {
    path: 'appointments-list',
    canActivate: [roleGuard([UserRoles.CLIENT, UserRoles.SPECIALIST])],
    loadComponent: () =>
      import('./pages/appointment-list-page/appointment-list-page.component').then(
        (m) => m.AppointmentListPageComponent
      ),
  },
  {
    path: 'appointments-manage/:id',
    canActivate: [roleGuard([UserRoles.CLIENT, UserRoles.SPECIALIST]), idGuard],
    loadComponent: () =>
      import('./pages/appointment-manage-page/appointment-manage-page.component').then(
        (m) => m.AppointmentManagePageComponent
      ),
  },
  {
    path: 'user-record/:id',
    canActivate: [roleGuard([UserRoles.CLIENT, UserRoles.SPECIALIST]), recordGuard],
    loadComponent: () =>
      import('./pages/user-record-page/user-record-page.component').then(
        (m) => m.UserMedicalRecordPageComponent
      ),
  },
  {
    path: 'clients-list',
    canActivate: [roleGuard([UserRoles.SPECIALIST])],
    loadComponent: () =>
      import('./pages/client-list-page/client-list-page.component').then(
        (m) => m.ClientListPageComponent
      ),
  },
  // Authenticated users
  {
    path: 'profile/edit',
    canActivate: [roleGuard([UserRoles.CLIENT, UserRoles.SPECIALIST, UserRoles.ADMIN])],
    loadComponent: () =>
      import('./pages/user-edit-page/user-edit-page.component').then(
        (m) => m.UserEditPageComponent
      ),
  },
];