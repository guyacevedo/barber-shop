import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { APP_SHARED_INFO } from '../../../core/config/app-info';
import { Router, RouterLink } from '@angular/router';
import { SvgIconComponent } from "../../icons/svg-icon.component";


interface NavbarContent {
  navItems: Array<{
    title: string;
    ariaLabel: string;
    href: string;
  }>;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, SvgIconComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  public isMenuOpen = signal(false);
  public isAnimating = signal(false);
  public router = inject(Router);

   navItems = [
     {
      title: 'Inicio',
      ariaLabel: 'Abrir Sección principal',
      href: '/home',
    },
    {
      title: 'Quiénes Somos',
      ariaLabel: 'Abrir Sección sobre quiénes somos',
      href: '/info/quienes-somos',
    },
    {
      title: 'Especialidades y Servicios',
      ariaLabel: 'Abrir Sección de Especialidades y Servicios',
      href: '/info/especialidades-y-servicios',
    },
    {
      title: 'Nuestros Profesionales',
      ariaLabel: 'Abrir Sección de Nuestros Profesionales',
      href: '/info/nuestros-profesionales',
    }
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
