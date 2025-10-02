import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from "../../../../shared/icons/svg-icon.component";
import { AuthFacade } from '../../../auth/auth.facade';

@Component({
  selector: 'app-dashboard-access',
  imports: [RouterLink, SvgIconComponent],
  templateUrl: './dashboard-access.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardAccessComponent {
  readonly authFacade = inject(AuthFacade);

  public clientAccess = [
    {
      title: 'Solicitar nuevo Turno',
      routerLink: '/dashboard/request-appointment',
      icon: 'assigmentAdd',
    },
    {
      title: 'Ver Historia',
      routerLink: `/dashboard/user-medical-record/${this.authFacade.user()?.id}`,
      icon: 'medicalInformation',
    },
    {
      title: 'Ver Lista de Turnos',
      routerLink: '/dashboard/appointments-list',
      icon: 'list',
    },
  ];

  public specialistAccess = [
    {
      title: 'Ver mis Clientes',
      routerLink: '/dashboard/clients-list',
      icon: 'client',
    },
    {
      title: 'Ver Lista de Turnos',
      routerLink: '/dashboard/appointments-list',
      icon: 'list',
    },
  ];
}