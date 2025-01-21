import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIndexCardSearchComponent } from './button-index-card-search.component';

describe('ButtonIndexCardSearchComponent', () => {
  let component: ButtonIndexCardSearchComponent;
  let fixture: ComponentFixture<ButtonIndexCardSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIndexCardSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonIndexCardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
