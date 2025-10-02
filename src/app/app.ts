import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { AuthFacade } from './features/auth/auth.facade';
import { NavigationService } from './shared/services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App {

  // Navigation control
  private router = inject(Router);
  private navigationService = inject(NavigationService);
  private authFacade = inject(AuthFacade);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const currentUrl = event.urlAfterRedirects;
        this.navigationService.setCurrentUrl(currentUrl);
      });

    // Check auth status on app startup
    this.authFacade.checkAuthStatus();
  }
}
