import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuotaComponent } from './card-quota.component';

describe('CardQuotaComponent', () => {
  let component: CardQuotaComponent;
  let fixture: ComponentFixture<CardQuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardQuotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardQuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
