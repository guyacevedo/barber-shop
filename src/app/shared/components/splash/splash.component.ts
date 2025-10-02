import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashComponent {
  @Input() backgroundColor: string = '--bg-lightblue-secondary';
}
