import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-registrarse',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './btn-registrarse.component.html',
  styleUrls: ['./btn-registrarse.component.scss']
})
export class BtnRegistrarseComponent {

}
