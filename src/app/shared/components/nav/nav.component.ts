import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AngularMaterialConfigurationModule
} from '../../angular-material-configuration/angular-material-configuration.module';

@Component({
  standalone: true,
  selector: 'ifm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AngularMaterialConfigurationModule]
})
export class NavComponent {

}
