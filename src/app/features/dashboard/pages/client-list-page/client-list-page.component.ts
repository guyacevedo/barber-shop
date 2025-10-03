import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { TitleDescriptionComponent } from '../../../../shared/components/title-description/title-description.component';
import { AuthFacade } from '../../../auth/auth.facade';
import { SplashComponent } from '../../../../shared/components/splash/splash.component';
import { ClientsTableComponent } from '../../../clients/components/clients-table/clients-table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-list-page',
  imports: [
    SvgIconComponent,
    TitleDescriptionComponent,
    SplashComponent,
    ClientsTableComponent,
    RouterLink
  ],
  templateUrl: './client-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientListPageComponent {
  readonly authFacade = inject(AuthFacade);
}
