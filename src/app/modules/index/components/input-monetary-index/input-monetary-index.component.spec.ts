import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMonetaryIndexComponent } from './input-monetary-index.component';

describe('InputMonetaryIndexComponent', () => {
  let component: InputMonetaryIndexComponent;
  let fixture: ComponentFixture<InputMonetaryIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMonetaryIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMonetaryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
