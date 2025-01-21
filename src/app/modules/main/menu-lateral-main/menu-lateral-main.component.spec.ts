import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralMainComponent } from './menu-lateral-main.component';

describe('MenuLateralMainComponent', () => {
  let component: MenuLateralMainComponent;
  let fixture: ComponentFixture<MenuLateralMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLateralMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLateralMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
