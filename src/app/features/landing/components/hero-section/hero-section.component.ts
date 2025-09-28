import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';

@Component({
  selector: 'app-hero-section',
  imports: [RouterModule, MainCarouselComponent],
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent { }
