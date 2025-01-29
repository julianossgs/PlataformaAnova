import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGraficIndexComponent } from './button-grafic-index.component';

describe('ButtonGraficIndexComponent', () => {
  let component: ButtonGraficIndexComponent;
  let fixture: ComponentFixture<ButtonGraficIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonGraficIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGraficIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
