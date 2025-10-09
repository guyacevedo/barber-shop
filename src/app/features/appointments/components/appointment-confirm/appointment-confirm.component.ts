import { ChangeDetectionStrategy, Component, computed, inject, Input, Signal } from '@angular/core';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { Specialist, Specialty } from '../../../../core/models';
import { CloudinaryService } from '../../../../services/cloudinary/cloudinary.service';

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
  private readonly cloudinaryService = inject(CloudinaryService);
  readonly profilePictureUrl: Signal<string | null> = computed(() => {
    if (this.specialist && this.specialist.profilePictureUrl) {
      if (this.specialist.profilePictureUrl.search('default-profile_qzf9ga.png')) {
        return null;
      }
      return this.cloudinaryService.getTransformedUrl(
        this.specialist.profilePictureUrl,
        'w_150,h_150,c_fill,g_face,f_webp'
      );

    }
    return null;
  });
}
