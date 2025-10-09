import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthFacade } from '../../../auth/auth.facade';
import { AppointmentFacade } from '../../../appointments/appointment.facade';
import { SplashComponent } from '../../../../shared/components/splash/splash.component';
import { TitleDescriptionComponent } from '../../../../shared/components/title-description/title-description.component';
import { AppointmentsTableComponent } from '../../../appointments/components/appointments-table/appointments-table.component';

@Component({
  selector: 'app-appointment-list-page',
  imports: [
    SplashComponent,
    TitleDescriptionComponent,
    AppointmentsTableComponent
],
  templateUrl: './appointment-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentListPageComponent {
  readonly authFacade = inject(AuthFacade);
  readonly appointmentFacade = inject(AppointmentFacade);
  readonly appointments = this.appointmentFacade.appointments();
}