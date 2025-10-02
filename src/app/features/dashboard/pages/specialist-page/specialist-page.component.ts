import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { UserBase } from '../../../../core/models';
import { SplashComponent } from '../../../../shared/components/splash/splash.component';
import { AuthFacade } from '../../../auth/auth.facade';
import { UserInformationCardComponent } from "../../components/user-information-card/user-information-card.component";
import { DashboardAccessComponent } from "../../components/dashboard-access/dashboard-access.component";


@Component({
  selector: 'app-specialist-page',
  imports: [SplashComponent, UserInformationCardComponent, DashboardAccessComponent],
  templateUrl: './specialist-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecialistPageComponent {
  private readonly authFacade = inject(AuthFacade);
  readonly user: Signal<UserBase | null> = this.authFacade.user;
  readonly isCheckingAuth: Signal<boolean> = this.authFacade.isCheckingAuth;
}
