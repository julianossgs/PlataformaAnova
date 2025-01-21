import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectIndexCardSearchComponent } from './input-select-index-card-search.component';

describe('InputSelectIndexCardSearchComponent', () => {
  let component: InputSelectIndexCardSearchComponent;
  let fixture: ComponentFixture<InputSelectIndexCardSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSelectIndexCardSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSelectIndexCardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
