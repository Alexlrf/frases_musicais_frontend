import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluiAlteraFraseComponent } from './exclui-altera-frase.component';

describe('ExcluiAlteraFraseComponent', () => {
  let component: ExcluiAlteraFraseComponent;
  let fixture: ComponentFixture<ExcluiAlteraFraseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluiAlteraFraseComponent]
    });
    fixture = TestBed.createComponent(ExcluiAlteraFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
