import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AllowedScore, Appointment, Rating } from '../../../../core/models';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';

@Component({
  selector: 'app-appointment-info',
  imports: [SvgIconComponent],
  templateUrl: './appointment-info.component.html',
  styleUrl: './appointment-info.component.css',
  providers: [],
})
export class AppointmentInfoComponent implements OnChanges {
  @Input({ required: true }) appointment!: Appointment;

  appointmentData: { label: string; value: string; statusClass?: string }[] =
    [];
  rating: Rating | null = null;
  stars: AllowedScore[] = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appointment'] && this.appointment) {
      this.buildAppointmentData();
    }
  }

  private buildAppointmentData(): void {
    const data: { label: string; value: string; statusClass?: string }[] = [];

    data.push({
      label: 'Fecha: ',
      value: this.appointment.date.toLocaleDateString()
    });
    data.push({
      label: 'Horario: ',
      value: this.appointment.date.toLocaleTimeString()
    });
    data.push({
      label: 'Especialidad: ',
      value: this.appointment.specialty.name,
    });
    data.push({
      label: 'Especialista: ',
      value:
        this.appointment.specialistFirstName +
        ' ' +
        this.appointment.specialistLastName,
    });
    data.push({
      label: 'Cliente: ',
      value:
        this.appointment.clientFirstName +
        ' ' +
        this.appointment.clientLastName,
    });
    data.push({
      label: 'Fecha de Solicitud: ',
      value: this.appointment.creationDate.toLocaleString()
     });

    if (this.appointment.rating) {
      this.rating = this.appointment.rating;
    } else {
      this.rating = null;
    }

    this.appointmentData = data;
  }
}