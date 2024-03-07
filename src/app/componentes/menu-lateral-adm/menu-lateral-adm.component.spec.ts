import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralAdmComponent } from './menu-lateral-adm.component';

describe('MenuLateralAdmComponent', () => {
  let component: MenuLateralAdmComponent;
  let fixture: ComponentFixture<MenuLateralAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuLateralAdmComponent]
    });
    fixture = TestBed.createComponent(MenuLateralAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
