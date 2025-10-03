import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { Specialist, Specialty } from '../../../../core/models';

@Component({
  selector: 'app-appointment-confirm',
  imports: [SvgIconComponent],
  templateUrl: './appointment-confirm.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentConfirmComponent {
  @Input({ required: true }) specialty!: Specialty | null;
  @Input({ required: true }) specialist!: Specialist | null;
  @Input({ required: true }) dateTime!: Date | null;
}
