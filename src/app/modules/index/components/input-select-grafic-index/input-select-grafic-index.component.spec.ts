import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectGraficIndexComponent } from './input-select-grafic-index.component';

describe('InputSelectGraficIndexComponent', () => {
  let component: InputSelectGraficIndexComponent;
  let fixture: ComponentFixture<InputSelectGraficIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSelectGraficIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSelectGraficIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
