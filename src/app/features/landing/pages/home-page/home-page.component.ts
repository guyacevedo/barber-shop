import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { PresentationWrapperComponent } from "../../components/presentation-wrapper/presentation-wrapper.component";
import { ServicesPrewiewListComponent } from "../../components/services-prewiew-list/services-prewiew-list.component";
import { InformationWrapperComponent } from "../../components/information-wrapper/information-wrapper.component";
import { RecommendationsComponent } from "../../components/recommendations/recommendations.component";


@Component({
  selector: 'app-home-page',
  imports: [
    HeroSectionComponent,
    PresentationWrapperComponent,
    ServicesPrewiewListComponent,
    InformationWrapperComponent,
    RecommendationsComponent
],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }

