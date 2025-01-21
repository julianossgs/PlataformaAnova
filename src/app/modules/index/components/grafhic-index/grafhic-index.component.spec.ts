import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafhicIndexComponent } from './grafhic-index.component';

describe('GrafhicIndexComponent', () => {
  let component: GrafhicIndexComponent;
  let fixture: ComponentFixture<GrafhicIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrafhicIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrafhicIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
