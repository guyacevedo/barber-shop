import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { SplashComponent } from '../../../../shared/components/splash/splash.component';
import { AuthFacade } from '../../../auth/auth.facade';
import { UserBase } from '../../../../core/models';
import { TitleDescriptionComponent } from "../../../../shared/components/title-description/title-description.component";
import { RequestAppointmentFormComponent } from "../../../appointments/components/request-appointment-form/request-appointment-form.component";

@Component({
  selector: 'app-request-appointment-page',
  imports: [SplashComponent, TitleDescriptionComponent, RequestAppointmentFormComponent],
  templateUrl: './request-appointment-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestAppointmentPageComponent {
  private readonly authFacade = inject(AuthFacade);
  readonly user: Signal<UserBase | null> = this.authFacade.user;
  readonly isCheckingAuth: Signal<boolean> = this.authFacade.isCheckingAuth;
}
