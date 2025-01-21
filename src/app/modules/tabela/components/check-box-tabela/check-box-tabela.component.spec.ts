import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxTabelaComponent } from './check-box-tabela.component';

describe('CheckBoxTabelaComponent', () => {
  let component: CheckBoxTabelaComponent;
  let fixture: ComponentFixture<CheckBoxTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckBoxTabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBoxTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
