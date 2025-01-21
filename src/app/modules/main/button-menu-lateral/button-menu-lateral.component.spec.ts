import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMenuLateralComponent } from './button-menu-lateral.component';

describe('ButtonMenuLateralComponent', () => {
  let component: ButtonMenuLateralComponent;
  let fixture: ComponentFixture<ButtonMenuLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMenuLateralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMenuLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
