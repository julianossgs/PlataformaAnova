import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMonetaryComponent } from './input-monetary.component';

describe('InputMonetaryComponent', () => {
  let component: InputMonetaryComponent;
  let fixture: ComponentFixture<InputMonetaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMonetaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMonetaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
