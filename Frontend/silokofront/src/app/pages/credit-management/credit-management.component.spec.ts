import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditManagementComponent } from './credit-management.component';

describe('CreditManagementComponent', () => {
  let component: CreditManagementComponent;
  let fixture: ComponentFixture<CreditManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
