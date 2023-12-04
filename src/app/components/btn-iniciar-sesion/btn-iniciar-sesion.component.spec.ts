import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnIniciarSesionComponent } from './btn-iniciar-sesion.component';

describe('BtnIniciarSesionComponent', () => {
  let component: BtnIniciarSesionComponent;
  let fixture: ComponentFixture<BtnIniciarSesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BtnIniciarSesionComponent]
    });
    fixture = TestBed.createComponent(BtnIniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
