import { ChangeDetectionStrategy, Component } from '@angular/core';
import { APP_SHARED_INFO } from '../../../core/config/app-info';
import { SvgIconComponent } from "../../icons/svg-icon.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [SvgIconComponent, RouterLink],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  // Href
  readonly facebook = APP_SHARED_INFO.social.facebook;
  readonly instagram = APP_SHARED_INFO.social.instagram;
  readonly twitter = APP_SHARED_INFO.social.twitter;
  readonly tiktok = APP_SHARED_INFO.social.tiktok;
  readonly github = APP_SHARED_INFO.social.github;
}
