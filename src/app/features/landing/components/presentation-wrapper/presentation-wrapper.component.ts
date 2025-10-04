import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { SvgIconComponent } from "../../../../shared/icons/svg-icon.component";
import { ICON_PATHS } from '../../../../shared/icons/icon-paths';

interface Data {
  icon: keyof typeof ICON_PATHS;
  title: string;
  description: string;
}

@Component({
  selector: 'app-presentation-wrapper',
  imports: [NgStyle, SvgIconComponent],
  templateUrl: './presentation-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationWrapperComponent {
  srcImage: string = 'images/presentation.webp';
  altImage: string = 'Foto de la  por fuera';
  titleFirstLine: string = 'Sobre nosotros';
  description: string = 'En BarberApp somos la barbería de todos. Prestamos nuestros servicios desde el año 2015, bajo el liderazgo de Pepito plus. Sabemos que cada vez los hombres se preocupan más por su imagen y buscan un aliado perfecto para transmitir su personalidad a través en un estilo propio: ¿Clásico, moderno, irreverente? No importa: aquí, todos tienen un lugar. Un conjunto de expertos hacen parte de nuestro equipo de trabajo y todos cumplen con la admirable misión de potenciar la imagen de cada hombre que cruza por nuestra puerta.';
  listItems: string[] = [
    'Ingresos rápidos para probar el funcionamiento',
    'Turnos online, sin demoras ni trámites',
    'Atención 100% digital desde Magangué',
  ];
  data: Data[] = [
    {
      icon: 'check',
      title: 'Nuestra Misión',
      description: 'Ofrecer un servicio de barbería de la más alta calidad, superando las expectativas de nuestros clientes en cada visita y creando un ambiente acogedor y profesional.'
    },
    {
      icon: 'care',
      title: 'Nuestra Visión',
      description: 'Ser la barbería líder y de mayor prestigio en la región, reconocida por nuestra innovación, la excelencia de nuestros especialistas y la satisfacción de nuestros clientes.'
    },
    {
      icon: 'star',
      title: 'Nuestros Valores',
      description: 'Pasión, Calidad, Integridad y Compromiso con el Cliente son los pilares que guían nuestro trabajo diario.'
    }
  ];
}
