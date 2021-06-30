import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotaManagementComponent } from './quota-management.component';

describe('QuotaManagementComponent', () => {
  let component: QuotaManagementComponent;
  let fixture: ComponentFixture<QuotaManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotaManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
