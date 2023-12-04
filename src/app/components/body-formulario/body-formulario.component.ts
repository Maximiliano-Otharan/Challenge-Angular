import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnRegistrarseComponent } from '../btn-registrarse/btn-registrarse.component';
import { BtnIniciarSesionComponent } from '../btn-iniciar-sesion/btn-iniciar-sesion.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-body-formulario',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BtnRegistrarseComponent, BtnIniciarSesionComponent, FormsModule],
  templateUrl: './body-formulario.component.html',
  styleUrls: ['./body-formulario.component.scss']
})
export class BodyFormularioComponent implements OnInit{

  cambioEmail = true;

  cambioContrasenia = true;

  constructor() {
  }

  ngOnInit(): void { 
  }

  onSubmit(f: NgForm) {

    if(f.value.email === '' || f.value.contraseña === '') {

      if(f.value.email === '') {
        this.cambioEmail = false;
      }
  
      if(f.value.contraseña === '') {
        this.cambioContrasenia = false;
      }

    }

    if(f.value.email !== '' || f.value.contraseña !== '') {
      if(f.value.email !== '') {
        this.cambioEmail = true;
      }
  
      if(f.value.contraseña !== '') {
        this.cambioContrasenia = true;
      }
    }
  }

}
