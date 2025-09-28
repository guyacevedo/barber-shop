import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";


@Component({
  selector: 'app-home-page',
  imports: [
    HeroSectionComponent
  ],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }

