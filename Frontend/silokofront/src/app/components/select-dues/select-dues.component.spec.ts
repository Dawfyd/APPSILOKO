import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDuesComponent } from './select-dues.component';

describe('SelectDuesComponent', () => {
  let component: SelectDuesComponent;
  let fixture: ComponentFixture<SelectDuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
