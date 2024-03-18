import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFraseComponent } from './cadastro-frase.component';

describe('CadastroFraseComponent', () => {
  let component: CadastroFraseComponent;
  let fixture: ComponentFixture<CadastroFraseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroFraseComponent]
    });
    fixture = TestBed.createComponent(CadastroFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
