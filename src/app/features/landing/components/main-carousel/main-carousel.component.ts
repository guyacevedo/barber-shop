import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface Slide {
  image: {
    mobile: string;
    desktop: string;
  };
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-main-carousel',
  imports: [RouterModule],
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainCarouselComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;


  slides: Slide[] = [
    {
      image: {
        mobile: '/images/carousel/carousel-1-mobile.webp',
        desktop: '/images/carousel/carousel-1.webp',
      },
      title: 'Bienvenido a BarberApp',
      description:
        'Somos una Barbería digital y presencial al servicio de tu Bienestar. Hacemos nuestro trabajo de forma humana y segura.',
      buttonText: 'Conocé más',
      buttonLink: '/info/quienes-somos',
    },
    {
      image: {
        mobile: '/images/carousel/carousel-2-mobile.webp',
        desktop: '/images/carousel/carousel-2.webp',
      },
      title: 'Portal para Clientes',
      description:
        'Solicitá turnos, gestioná consultas y accedé a tu historial. Tu apariencia y bienestar, a un clic.',
      buttonText: 'Ingresar al portal',
      buttonLink: '/auth/login',
    },
    {
      image: {
        mobile: '/images/carousel/carousel-3-mobile.webp',
        desktop: '/images/carousel/carousel-3.webp',
      },
      title: 'Portal para Especialistas',
      description:
        'Organizá tus turnos, gestioná y registrá citas de forma rápida y simple. Todo en un único panel.',
      buttonText: 'Ingresar al portal',
      buttonLink: '/auth/login',
    },
    {
      image: {
        mobile: '/images/carousel/carousel-4-mobile.webp',
        desktop: '/images/carousel/carousel-4.webp',
      },
      title: 'Especialidades y Servicios',
      description:
        'Descubrí nuestra amplia oferta estetica: Barbería general, Limpieza facial, dermatología y más.',
      buttonText: 'Ver más',
      buttonLink: '/info/especialidades-y-servicios',
    },
    {
      image: {
        mobile: '/images/carousel/carousel-5-mobile.webp',
        desktop: '/images/carousel/carousel-5.webp',
      },
      title: 'Nuestros Profesionales',
      description:
        'Conocé al equipo de especialistas que hace posible BarberApp. Calidez humana en cada consulta.',
      buttonText: 'Ver más',
      buttonLink: '/info/nuestros-profesionales',
    },
  ];

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      new Swiper(this.swiperContainer.nativeElement, {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        allowTouchMove: true,
        effect: 'slide',
        speed: 1000,
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

      // Custom fade-in animation for lazy-loaded images
      const images = this.swiperContainer.nativeElement.querySelectorAll('img');
      images.forEach((img: HTMLImageElement) => {
        if (img.complete) {
          img.classList.add('is-loaded');
        } else {
          img.addEventListener('load', () => {
            img.classList.add('is-loaded');
          });
        }
      });
    }
  }

}
