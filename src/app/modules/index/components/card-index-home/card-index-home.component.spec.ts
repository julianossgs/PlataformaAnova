import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIndexHomeComponent } from './card-index-home.component';

describe('CardIndexHomeComponent', () => {
  let component: CardIndexHomeComponent;
  let fixture: ComponentFixture<CardIndexHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIndexHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIndexHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
