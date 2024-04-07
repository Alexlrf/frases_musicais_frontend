import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemLogoComponent } from './imagem-logo.component';

describe('ImagemLogoComponent', () => {
  let component: ImagemLogoComponent;
  let fixture: ComponentFixture<ImagemLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagemLogoComponent]
    });
    fixture = TestBed.createComponent(ImagemLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
