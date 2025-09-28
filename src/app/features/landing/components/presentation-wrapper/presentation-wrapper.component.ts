import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-presentation-wrapper',
  imports: [NgStyle, RouterLink],
  templateUrl: './presentation-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationWrapperComponent {
  srcImage: string = 'images/presentation.webp';
  altImage: string = 'Foto de la Clínica por fuera';
  sectionText: string = 'Acerca de Nuestra Compañia';
  titleFirstLine: string = 'Barber Shop';
  titleSecondLine: string = '10 Años De Experiencia';
  description: string = 'En Barber Shop somos la barbería de todos. Prestamos nuestros servicios desde el año 2015, bajo el liderazgo de Pepito plus. Sabemos que cada vez los hombres se preocupan más por su imagen y buscan un aliado perfecto para transmitir su personalidad a través en un estilo propio: ¿Clásico, moderno, irreverente? No importa: aquí, todos tienen un lugar. Un conjunto de expertos hacen parte de nuestro equipo de trabajo y todos cumplen con la admirable misión de potenciar la imagen de cada hombre que cruza por nuestra puerta.';
  listItems: string[] = [
    'Ingresos rápidos para probar el funcionamiento',
    'Turnos online, sin demoras ni trámites',
    'Atención 100% digital desde Magangué',
  ];
  anchorText: string = 'Conoce más';
  anchorLink: string = '/info/quienes-somos';
}
