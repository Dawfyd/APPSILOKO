import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleComponent } from './card-simple.component';

describe('CardSimpleComponent', () => {
  let component: CardSimpleComponent;
  let fixture: ComponentFixture<CardSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
