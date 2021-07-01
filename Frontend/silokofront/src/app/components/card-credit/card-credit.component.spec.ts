import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreditComponent } from './card-credit.component';

describe('CardCreditComponent', () => {
  let component: CardCreditComponent;
  let fixture: ComponentFixture<CardCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
