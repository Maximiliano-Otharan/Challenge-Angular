import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body-texto-bienvenida',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './body-texto-bienvenida.component.html',
  styleUrls: ['./body-texto-bienvenida.component.scss']
})
export class BodyTextoBienvenidaComponent {

}
