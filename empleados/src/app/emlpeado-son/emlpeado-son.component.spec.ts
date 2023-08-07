import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmlpeadoSonComponent } from './emlpeado-son.component';

describe('EmlpeadoSonComponent', () => {
  let component: EmlpeadoSonComponent;
  let fixture: ComponentFixture<EmlpeadoSonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmlpeadoSonComponent]
    });
    fixture = TestBed.createComponent(EmlpeadoSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
