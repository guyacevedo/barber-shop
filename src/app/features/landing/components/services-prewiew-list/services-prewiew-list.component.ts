import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, inject } from '@angular/core';
import { SvgIconComponent } from "../../../../shared/icons/svg-icon.component";
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-prewiew-list',
  imports: [SvgIconComponent, NgClass, RouterLink],
  templateUrl: './services-prewiew-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesPrewiewListComponent {
  title = 'Los mejores servicios de barbería a tu disposición';

  //private readonly newsFacade = inject(NewsFacade);
  private readonly elementRef = inject(ElementRef);

  constructor() {
    // Effect to handle image loading animations
    effect(() => {
      this.servicesList(); // Depend on this signal

      // Defer to the next microtask to allow the DOM to update
      setTimeout(() => {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
          const images: NodeListOf<HTMLImageElement> =
            this.elementRef.nativeElement.querySelectorAll('.img-fade-in');
          images.forEach((img) => {
            if (img.complete) {
              img.classList.add('is-loaded');
            } else {
              img.addEventListener('load', () => {
                img.classList.add('is-loaded');
              }, { once: true });
            }
          });
        }
      });
    });
  }

  readonly servicesList = computed(() => {
    return [
      {
        id: '1',
        title: 'Corte de cabello',
        imageUrl: '/images/corte.webp',
        summary:
          'Cortes de vanguardia para hombres modernos. Nuestros estilistas te ofrecen un look único y audaz en cada visita.',
        content: '',
        tags: ['Barbería', 'Corte de cabello', 'Degradado'],
      },
      {
        id: '2',
        title: 'Corte de barba',
        imageUrl: '/images/barba.webp',
        summary: 'Domina el arte de la barba perfecta. Nuestros expertos barberos esculpen y cuidan tu barba para un look impecable y varonil.',
        content: '',
        tags: ['Rostro', 'Barba', 'Estilo', 'Cuidado'],
      },
      {
        id: '3',
        title: 'Limpieza Facial',
        imageUrl: '/images/limpieza-facial.webp',
        summary: 'Descubre el secreto de una piel fresca y saludable. Nuestra limpieza facial profesional elimina impurezas y resalta tu belleza natural.',
        content: '',
        tags: ['Salud facial', 'Belleza', 'Piel fresca '],
      }
    ];

  });

  getMobileImageUrl(url: string): string {
    const parts = url.split('.');
    const extension = parts.pop();
    const base = parts.join('.');
    return `${base}-mobile.${extension}`;
  }
}
