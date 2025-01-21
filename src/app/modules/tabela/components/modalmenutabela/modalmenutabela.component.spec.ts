import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmenutabelaComponent } from './modalmenutabela.component';

describe('ModalmenutabelaComponent', () => {
  let component: ModalmenutabelaComponent;
  let fixture: ComponentFixture<ModalmenutabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalmenutabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalmenutabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
