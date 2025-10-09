import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleDescriptionComponent } from '../../../../shared/components/title-description/title-description.component';
import { AuthFacade } from '../../../auth/auth.facade';
import { SplashComponent } from '../../../../shared/components/splash/splash.component';
import { ClientsTableComponent } from '../../../clients/components/clients-table/clients-table.component';

@Component({
  selector: 'app-client-list-page',
  imports: [
    TitleDescriptionComponent,
    SplashComponent,
    ClientsTableComponent
],
  templateUrl: './client-list-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientListPageComponent {
  readonly authFacade = inject(AuthFacade);
}
