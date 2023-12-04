import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRegistrarseComponent } from './btn-registrarse.component';

describe('BtnRegistrarseComponent', () => {
  let component: BtnRegistrarseComponent;
  let fixture: ComponentFixture<BtnRegistrarseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BtnRegistrarseComponent]
    });
    fixture = TestBed.createComponent(BtnRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
