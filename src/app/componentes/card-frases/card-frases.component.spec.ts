import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFrasesComponent } from './card-frases.component';

describe('CardFrasesComponent', () => {
  let component: CardFrasesComponent;
  let fixture: ComponentFixture<CardFrasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFrasesComponent]
    });
    fixture = TestBed.createComponent(CardFrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
