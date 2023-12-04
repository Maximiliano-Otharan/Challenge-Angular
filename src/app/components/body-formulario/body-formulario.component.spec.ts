import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFormularioComponent } from './body-formulario.component';

describe('BodyFormularioComponent', () => {
  let component: BodyFormularioComponent;
  let fixture: ComponentFixture<BodyFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BodyFormularioComponent]
    });
    fixture = TestBed.createComponent(BodyFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
