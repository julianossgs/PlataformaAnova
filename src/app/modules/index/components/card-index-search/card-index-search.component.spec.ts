import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIndexSearchComponent } from './card-index-search.component';

describe('CardIndexSearchComponent', () => {
  let component: CardIndexSearchComponent;
  let fixture: ComponentFixture<CardIndexSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIndexSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIndexSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
