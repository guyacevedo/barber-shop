import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SplashComponent } from '../../../../shared/components/splash/splash.component';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { TitleDescriptionComponent } from '../../../../shared/components/title-description/title-description.component';
import { AuthFacade } from '../../../auth/auth.facade';
import { AppointmentFacade } from '../../../appointments/appointment.facade';
import { UserBase, Appointment } from '../../../../core/models';
import { AppointmentInformDialogComponent } from '../../../appointments/components/appointment-inform-dialog/appointment-inform-dialog.component';
import { DialogService } from '../../../../shared/services/dialog/dialog.service';
import { NavigationService } from '../../../../shared/services/navigation/navigation.service';

@Component({
  selector: 'app-user-record-page',
  imports: [
    SplashComponent,
    SvgIconComponent,
    TitleDescriptionComponent,
    RouterLink,
  ],
  templateUrl: './user-record-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMedicalRecordPageComponent implements OnInit {
  private readonly authFacade = inject(AuthFacade);
  private readonly appointmentFacade = inject(AppointmentFacade);
  private readonly route = inject(ActivatedRoute);
  private readonly navigationService = inject(NavigationService);

  private dialogService = inject(DialogService);

  readonly user: Signal<UserBase | null> = this.authFacade.user;
  readonly isCheckingAuth: Signal<boolean> = this.authFacade.isCheckingAuth;

  readonly backButtonText = signal('Perfil');
  readonly backButtonUrl = signal(['/dashboard/client']);

  readonly minTimePassed = signal(false);
  readonly showContent = computed(
    () => this.minTimePassed() && !!this.user && this.entries()
  );

  readonly entries: Signal<Appointment[] | null> =
    this.appointmentFacade.viewedClientAppointments;

  constructor() {
    effect(() => {
      const previousUrl = this.navigationService.previousUrl();
      const user = this.authFacade.user();

      if (
        (previousUrl && previousUrl.includes('appointments-manage')) ||
        (previousUrl && previousUrl.includes('clients-list'))
      ) {
        this.backButtonText.set('Turno');
        this.backButtonUrl.set([previousUrl]);
      } else {
        this.backButtonText.set('Perfil');
        if (user?.role === 'specialist') {
          this.backButtonUrl.set(['/dashboard/specialist']);
        } else {
          this.backButtonUrl.set(['/dashboard/client']);
        }
      }
    });
  }

  async ngOnInit() {
    const clientId = this.route.snapshot.paramMap.get('id');

    if (clientId) {
      await this.appointmentFacade.loadCompletedAppointmentsByClientId(
        clientId
      );
    }

    setTimeout(() => {
      this.minTimePassed.set(true);
    }, 1000);
  }

  openDiagnosisDialog = (appointment: Appointment): void => {
    this.dialogService.openGeneric(AppointmentInformDialogComponent, {
      title: 'Resumen',
      subtitle: `Este informe contiene el resumen proporcionado por el especialista
        ${appointment.specialistFirstName} ${
        appointment.specialistLastName
      }, correspondiente al turno de ${
        appointment.specialty.name
      } llevado a cabo el día 
        ${
        appointment.date.getDate() +
           ' del mes ' +
            (appointment.date.getMonth() + 1) +
           ' de ' +
           appointment.date.getFullYear() || ''
       }.
        `,
      icon: 'diagnosis',
      inform: [
        {
          label: 'Detalle general',
          value: appointment.diagnosis?.details! || 'Sin especificar',
        },
        {
          label: 'Otras anotaciones',
          value:
            appointment.diagnosis?.anotations! || 'Sin anotaciones extras.',
        },
      ],
    });
  };
}
