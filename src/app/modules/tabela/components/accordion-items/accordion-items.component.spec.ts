import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemsComponent } from './accordion-items.component';

describe('AccordionItemsComponent', () => {
  let component: AccordionItemsComponent;
  let fixture: ComponentFixture<AccordionItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
