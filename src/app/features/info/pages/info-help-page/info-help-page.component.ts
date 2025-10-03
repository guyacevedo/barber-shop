import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-help-page',
  imports: [SvgIconComponent, RouterModule],
  templateUrl: './info-help-page.component.html',
  styleUrl: './info-help-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoHelpPageComponent {


  constructor() { }

  openFaqItem: number | null = null;

  faqItems = [
    {
      question: '¿Cómo solicito un nuevo turno?',
      answer:
        'Primero, iniciá sesión como Cliente para acceder al Portal, y hacé clic en "Solicitar Nuevo Turno". Luego, seleccioná el servicio, el profesional que prefieras y elegí el día y horario que más te convenga. ¡Así de fácil!',
    },
    {
      question: '¿Puedo ver mi historial de turnos?',
      answer:
        '¡Claro! En la sección "Mis Turnos", encontrarás un listado completo de todos tus turnos pasados y futuros. Podrás ver detalles como la fecha, el especialista y el estado de cada uno.',
    },
    {
      question: '¿Cómo gestiono un turno?',
      answer:
        'Para cancelar o verificar el estado y la información de un turno, ingresá al portal y hacé clic en "Mis Turnos", buscá tu turno y listo. Allí tendrás las opciones para cancelarlo, calificarlo o ver el resumen escrito por el especialista.',
    },
    {
      question: '¿Cómo accedo a mi historia?',
      answer:
        'Tu historia es confidencial y solo puede ser accedida por usted y los profesionales autorizados. Puede consultar un resumen de tus últimas consultas en la sección "Mi Perfil" o solicitar una copia completa en la recepción de la Barbería.',
    },
  ];

  toggleFaqItem(index: number) {
    this.openFaqItem = this.openFaqItem === index ? null : index;
  }
}