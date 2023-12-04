import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-iniciar-sesion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './btn-iniciar-sesion.component.html',
  styleUrls: ['./btn-iniciar-sesion.component.scss']
})
export class BtnIniciarSesionComponent {

}
