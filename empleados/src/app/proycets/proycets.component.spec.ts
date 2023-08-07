import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProycetsComponent } from './proycets.component';

describe('ProycetsComponent', () => {
  let component: ProycetsComponent;
  let fixture: ComponentFixture<ProycetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProycetsComponent]
    });
    fixture = TestBed.createComponent(ProycetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
