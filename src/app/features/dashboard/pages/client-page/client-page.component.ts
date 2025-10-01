import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { AuthFacade } from '../../../auth/auth.facade';
import { UserBase } from '../../../../core/models';
import { SplashComponent } from '../../../../shared/components/splash/splash.component';
import { UserInformationCardComponent } from "../../components/user-information-card/user-information-card.component";

@Component({
  selector: 'app-client-page',
  imports: [
    SplashComponent,
    UserInformationCardComponent
],
  templateUrl: './client-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientPageComponent {
  private readonly authFacade = inject(AuthFacade);
  readonly user: Signal<UserBase | null> = this.authFacade.user;
  readonly isCheckingAuth: Signal<boolean> = this.authFacade.isCheckingAuth;
}
