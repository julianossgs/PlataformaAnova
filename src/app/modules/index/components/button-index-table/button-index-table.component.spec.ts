import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIndexTableComponent } from './button-index-table.component';

describe('ButtonIndexTableComponent', () => {
  let component: ButtonIndexTableComponent;
  let fixture: ComponentFixture<ButtonIndexTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIndexTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIndexTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
