import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanStatsHeaderComponent } from './loan-stats-header.component';

describe('LoanStatsHeaderComponent', () => {
  let component: LoanStatsHeaderComponent;
  let fixture: ComponentFixture<LoanStatsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanStatsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanStatsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
