import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientsComponent } from './table-clients.component';

describe('TableClientsComponent', () => {
  let component: TableClientsComponent;
  let fixture: ComponentFixture<TableClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
