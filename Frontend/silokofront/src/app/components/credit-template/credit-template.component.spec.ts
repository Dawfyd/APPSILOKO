import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditTemplateComponent } from './credit-template.component';

describe('CreditTemplateComponent', () => {
  let component: CreditTemplateComponent;
  let fixture: ComponentFixture<CreditTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
