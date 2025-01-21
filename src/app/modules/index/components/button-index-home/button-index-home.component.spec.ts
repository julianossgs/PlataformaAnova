import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIndexHomeComponent } from './button-index-home.component';

describe('ButtonIndexHomeComponent', () => {
  let component: ButtonIndexHomeComponent;
  let fixture: ComponentFixture<ButtonIndexHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIndexHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIndexHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
