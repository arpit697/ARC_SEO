import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsManagementComponent } from './earnings-management.component';

describe('EarningsManagementComponent', () => {
  let component: EarningsManagementComponent;
  let fixture: ComponentFixture<EarningsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
