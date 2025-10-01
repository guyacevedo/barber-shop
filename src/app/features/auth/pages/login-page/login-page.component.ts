import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
@Component({
  selector: 'app-login-page',
  imports: [LoginFormComponent],
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
}