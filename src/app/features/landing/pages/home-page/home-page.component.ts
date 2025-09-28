import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { PresentationWrapperComponent } from "../../components/presentation-wrapper/presentation-wrapper.component";


@Component({
  selector: 'app-home-page',
  imports: [
    HeroSectionComponent,
    PresentationWrapperComponent
],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }

