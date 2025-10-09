import { Component, computed, effect, ElementRef, inject, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { AllowedScore, Appointment, Rating, UserBase } from '../../../../core/models';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import {
  getEnumLabel,
  ROLE_LABELS,
  SEX_LABELS,
  STATUS_LABELS,
} from '../../../../core/enums/enum-labels';
import { CloudinaryService } from '../../../../services/cloudinary/cloudinary.service';

@Component({
  selector: 'app-appointment-info',
  imports: [SvgIconComponent],
  templateUrl: './appointment-info.component.html',
  styleUrl: './appointment-info.component.css',
  providers: [],
})
export class AppointmentInfoComponent implements OnChanges, OnInit {
  @Input({ required: true }) appointment!: Appointment;
  @Input({ required: true }) user!: UserBase | null;

  appointmentData: { label: string; value: string; statusClass?: string }[] =
    [];
  rating: Rating | null = null;
  stars: AllowedScore[] = [1, 2, 3, 4, 5];

  get personalData() {
    const user = this.user;
    if (!user) return [];
    return [
      { label: 'Sexo', value: getEnumLabel(SEX_LABELS, user.sex) },
      {
        label: 'Edad: ',
        value: this.formatAge(user?.birthDate),
      },
    ];
  }

  private readonly cloudinaryService = inject(CloudinaryService);
  private readonly elementRef = inject(ElementRef);
  readonly defaultProfilePictureUrl = this.cloudinaryService.defaultProfilePictureUrl;
  readonly minTimePassed = signal(false);
  readonly showContent = computed(() => this.minTimePassed() && !!this.user);

  constructor() {
    // Effect to handle image loading animations
    effect(() => {
      this.showContent();

      setTimeout(() => {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
          const images: NodeListOf<HTMLImageElement> =
            this.elementRef.nativeElement.querySelectorAll('.img-fade-in');
          images.forEach((image) => {
            if (image && !image.classList.contains('is-loaded')) {
              if (image.complete) {
                image.classList.add('is-loaded');
              } else {
                image.addEventListener(
                  'load',
                  () => {
                    image.classList.add('is-loaded');
                  },
                  { once: true }
                );
              }
            }
          });
        }
      });
    });
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.minTimePassed.set(true);
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appointment'] && this.appointment) {
      this.buildAppointmentData();
    }
  }

  private buildAppointmentData(): void {
    const data: { label: string; value: string; statusClass?: string }[] = [];

    data.push({
      label: 'Fecha de la Cita: ',
      value: this.appointment.date.toLocaleDateString()
    });
    data.push({
      label: 'Horario: ',
      value: this.appointment.date.toLocaleTimeString()
    });
    data.push({
      label: 'Servicio: ',
      value: this.appointment.specialty.name,
    });
    data.push({
      label: 'Fecha de Reserva: ',
      value: this.appointment.creationDate.toLocaleString()
    });

    if (this.appointment.rating) {
      this.rating = this.appointment.rating;
    } else {
      this.rating = null;
    }

    this.appointmentData = data;
  }

  // Calculate and format age
  formatAge(birthDate: any): string {
    if (!birthDate) return 'Desconocido';
    let d: Date;
    if (
      typeof birthDate === 'object' &&
      typeof birthDate.toDate === 'function'
    ) {
      d = birthDate.toDate();
    } else {
      d = new Date(birthDate);
    }
    if (isNaN(d.getTime())) return 'Desconocido';
    const today = new Date();
    let age = today.getFullYear() - d.getFullYear();
    const m = today.getMonth() - d.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < d.getDate())) {
      age--;
    }
    return `${age} años`;
  }

  readonly profilePictureUrl = computed(() => {
    if (this.user && this.user.profilePictureUrl) {
      return this.cloudinaryService.getTransformedUrl(
        this.user.profilePictureUrl,
        'w_60,h_60,c_fill,g_face,f_webp'
      );
    }
    return this.defaultProfilePictureUrl;
  });
}