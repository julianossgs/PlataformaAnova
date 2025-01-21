import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIndexComponent } from './card-index.component';

describe('CardIndexComponent', () => {
  let component: CardIndexComponent;
  let fixture: ComponentFixture<CardIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
