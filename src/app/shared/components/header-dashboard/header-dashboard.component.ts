import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthFacade } from '../../../features/auth/auth.facade';
import { UserSubmenuComponent } from '../user-submenu/user-submenu.component';
import { UserRoles as R } from '../../../core/enums';
import { ROLE_LABELS } from '../../../core/enums/enum-labels';
import { APP_SHARED_INFO } from '../../../core/config/app-info';
import { SvgIconComponent } from "../../icons/svg-icon.component";

@Component({
  selector: 'app-header-dashboard',
  imports: [RouterLink, UserSubmenuComponent, SvgIconComponent],
  templateUrl: './header-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderDashboardComponent {
  readonly authFacade = inject(AuthFacade);
  readonly user = this.authFacade.user;
  public isMenuOpen = signal(false);
  public isAnimating = signal(false);
  router = inject(Router);

  get roleLabel(): string {
    const role = this.user()?.role;
    return role ? ROLE_LABELS.get(role) ?? role : '';
  }

  get title(): string {
    const role = this.user()?.role;
    if (!role) return '';
    const label = ROLE_LABELS.get(role) ?? '';
    return `Portal para ${label ? label + 's' : ''}`;
  }

  get userRoleIcon(): 'user' | 'client' | 'specialist' {
    const role = this.user()?.role;
    if (role === R.CLIENT) return 'client';
    if (role === R.SPECIALIST) return 'specialist';
    return 'user';
  }


  public navItemsClient = [
    {
      title: 'Inicio',
      ariaLabel: 'Abrir dashboard',
      href: `/dashboard/${this.authFacade.user()?.role}`,
    },
    {
      title: 'Solicitar nuevo Turno',
      href: '/dashboard/request-appointment',
      ariaLabel: 'Abrir Sección para solicitar un nuevo turno',
    },
    {
      title: 'Ver Historia',
      href: `/dashboard/user-record/${this.authFacade.user()?.id}`,
      ariaLabel: 'Abrir Sección para ver el historial del cliente',
    },
    {
      title: 'Lista de Turnos',
      href: '/dashboard/appointments-list',
      ariaLabel: 'Abrir Sección para listado de turnos',
    },
  ];

  public navItemsSpecialist = [
    {
      title: 'Inicio',
      ariaLabel: 'Abrir dashboard',
      href: `/dashboard/${this.authFacade.user()?.role}`,
    },
    {
      title: 'Clientes',
      href: '/dashboard/clients-list',
      ariaLabel: 'Abrir Sección para listado de clientes',
    },
    {
      title: 'Lista de Turnos',
      href: '/dashboard/appointments-list',
      ariaLabel: 'Abrir Sección para listado de turnos',
    },
  ];

  toggleMenu() {
    if (!this.isAnimating()) {
      this.isAnimating.set(true);
    }
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  // Href
  readonly facebook = APP_SHARED_INFO.social.facebook;
  readonly instagram = APP_SHARED_INFO.social.instagram;
  readonly twitter = APP_SHARED_INFO.social.twitter;
  readonly tiktok = APP_SHARED_INFO.social.tiktok;
  readonly github = APP_SHARED_INFO.social.github;
}
