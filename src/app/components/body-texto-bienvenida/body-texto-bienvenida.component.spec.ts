import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTextoBienvenidaComponent } from './body-texto-bienvenida.component';

describe('BodyTextoBienvenidaComponent', () => {
  let component: BodyTextoBienvenidaComponent;
  let fixture: ComponentFixture<BodyTextoBienvenidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BodyTextoBienvenidaComponent]
    });
    fixture = TestBed.createComponent(BodyTextoBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
