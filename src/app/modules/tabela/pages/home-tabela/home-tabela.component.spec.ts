import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTabelaComponent } from './home-tabela.component';

describe('HomeTabelaComponent', () => {
  let component: HomeTabelaComponent;
  let fixture: ComponentFixture<HomeTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
